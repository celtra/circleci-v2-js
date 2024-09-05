import {
    beforeAll, describe, expect, test,
} from 'vitest'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { createClient } from './index'

const artifactUrlBase = 'https://output-circle-artifacts.com/output/job/1a23-456b/artifacts/0/tmp/'

describe('client', () => {
    beforeAll(() => {
        const handlers = [
            http.get(artifactUrlBase + '*',
                ({ request }) => {
                    if (request.headers.get('Authorization') !==
                        `Basic ${Buffer.from('myToken:').toString('base64')}`) {
                        return HttpResponse.json({}, { status: 401 })
                    }

                    console.log(request.url.endsWith('artifact.txt'))
                    if (request.url.endsWith('artifact.txt')) {
                        return HttpResponse.text('This is a test artifact')
                    } else if (request.url.endsWith('artifact.json')) {
                        return HttpResponse.json({ name: 'test artifact' })
                    }

                    return HttpResponse.json({}, { status: 404 })
                }),
        ]
        const server = setupServer(...handlers)
        server.listen()
    })

    test('Fetch via http URL fails', async () => {
        const client = createClient('myToken')

        try {
            await client.helpers.downloadArtifactFromURL(artifactUrlBase.replace('https://', 'http://'))
        } catch (error) {
            expect((error as NodeJS.ErrnoException).message).toBe('Artifacts can only be downloaded via https URL')
        }
    })

    test('Fetch text artifact', async () => {
        const client = createClient('myToken')

        const responseData = await client.helpers.downloadArtifactFromURL(artifactUrlBase + 'artifact.txt')
        const responseText = new TextDecoder().decode(responseData)
        expect(responseText).toBe('This is a test artifact')
    })

    test('Fetch JSON artifact', async () => {
        const client = createClient('myToken')

        const responseData = await client.helpers.downloadArtifactFromURL(artifactUrlBase + 'artifact.json')
        const responseText = new TextDecoder().decode(responseData)
        const responseJSON = JSON.parse(responseText) as { name?: string }
        expect(responseJSON.name).toBe('test artifact')
    })
})
