import {
    mkdtemp,
    readFile,
    realpath,
    rm,
    writeFile,
} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import path from 'node:path'
import process from 'node:process'
import {createClient} from '@hey-api/openapi-ts'
import {compare} from 'dir-compare'

async function withTemporaryDirectory<T>(function_: (directory: string) => Promise<T>): Promise<T> {
    const directory = await mkdtemp(await realpath(tmpdir()) + path.sep)
    try {
        return await function_(directory)
    } finally {
        await rm(directory, {recursive: true})
    }
}

/**
 * CircleCI doesn't publishes OpenAPI specs file, so we need to parse it from the generate HTML.
 */
async function getOpenApiSpecification(): Promise<unknown> {
    const page = await fetch('https://circleci.com/docs/api/v2/index.html')
    const text = await page.text()
    const redocStateLines = text.split('\n').filter(line => line.includes('__redoc_state ='))

    if (redocStateLines.length !== 1) {
        throw new Error(`Expected 1 line, received: ${redocStateLines.length}`)
    }

    const line = redocStateLines[0]
    if (line === undefined) {
        throw new Error('Missing line')
    }

    const regexResult = /const __redoc_state = (.*);/i.exec(line)

    if (regexResult === null) {
        throw new Error('Regex returned no results')
    }

    const match = regexResult[1]
    if (match === undefined) {
        throw new Error('Couldn\'t find match with regex')
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(match).spec.data
}

async function generate(destinationDirectory: string): Promise<void> {
    // Fetch specification.
    const openApiSpec = await getOpenApiSpecification()

    // Generate client.
    await withTemporaryDirectory(async temporaryDirectory => {
        const specPath = path.join(temporaryDirectory, 'openapi.json')
        await writeFile(specPath, JSON.stringify(openApiSpec))

        await createClient({
            client: '@hey-api/client-fetch',
            input: specPath,
            output: destinationDirectory,
        })
    })

    // DTS cannot be built if `client` type is not provided.
    const servicesPath = path.join(destinationDirectory, 'services.gen.ts')
    const services = await readFile(servicesPath)
    const modified = services
        .toString()
        .replace('import { createClient,', 'import { Client, createClient,')
        .replace('export const client = createClient(createConfig());', 'export const client: Client = createClient(createConfig());')
    await writeFile(servicesPath, modified)
}

async function checkIfGeneratedCodeUpToDate(codeDirectory: string): Promise<boolean> {
    return withTemporaryDirectory(async temporaryDirectory => {
        await generate(temporaryDirectory)

        const result = await compare(codeDirectory, temporaryDirectory, {
            compareContent: true,
        })

        return result.same
    })
}

async function main(): Promise<void> {
    const codeDirectory = 'src/client'
    const arguments_ = process.argv.slice(2)

    if (arguments_.length === 0) {
        return generate(codeDirectory)
    }

    if (arguments_.length === 1 && arguments_[0] === '--check') {
        const upToDate = await checkIfGeneratedCodeUpToDate(codeDirectory)

        if (upToDate) {
            console.log('Generate code up to date.')
            return
        }

        throw new Error('Generated code not up to date. Please run \'npm run generate\'')
    }

    throw new Error(`Usage: 'npm run generate [--check]', received args: ${arguments_.join(' ')}`)
}

await main()
