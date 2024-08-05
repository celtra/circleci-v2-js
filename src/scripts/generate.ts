import {
    mkdtemp,
    realpath,
    rm,
    readFile,
    writeFile,
    access,
} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import path from 'node:path'
import process from 'node:process'
import openapiTS, {astToString} from 'openapi-typescript'

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

async function generate(): Promise<string> {
    // Fetch specification.
    const openApiSpec = await getOpenApiSpecification()

    // Generate client.
    return withTemporaryDirectory(async temporaryDirectory => {
        const specPath = path.join(temporaryDirectory, 'openapi.json')
        await writeFile(specPath, JSON.stringify(openApiSpec))

        const ast = await openapiTS(new URL(specPath, import.meta.url))
        return astToString(ast)
    })
}

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await access(filePath)
    } catch {
        return false
    }

    return true
}

async function checkIfGeneratedCodeUpToDate(destinationPath: string): Promise<boolean> {
    if (!await fileExists(destinationPath)) {
        throw new Error('Schema is not present')
    }

    const existingSchema = await readFile(destinationPath)
    const generatedSchema = await generate()

    return existingSchema.toString() === generatedSchema
}

async function main(): Promise<void> {
    const destinationPath = path.join(import.meta.dirname, '..', 'schema.d.ts')
    const arguments_ = process.argv.slice(2)

    if (arguments_.length === 0) {
        return writeFile(destinationPath, await generate())
    }

    if (arguments_.length === 1 && arguments_[0] === '--check') {
        const upToDate = await checkIfGeneratedCodeUpToDate(destinationPath)

        if (upToDate) {
            console.log('Generate code up to date.')
            return
        }

        throw new Error('Generated code not up to date. Please run \'npm run generate\'')
    }

    throw new Error(`Usage: 'npm run generate [--check]', received args: ${arguments_.join(' ')}`)
}

await main()
