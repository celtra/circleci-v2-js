import {
    beforeAll, describe, expect, test,
} from 'vitest'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { createClient, operations } from './index'

describe('client', () => {
    beforeAll(() => {
        const handlers = [
            http.get('https://circleci.com/api/v2/workflow/abcd', ({ request }) => {
                if (request.headers.get('Circle-Token') !== 'myToken') {
                    return HttpResponse.json({}, { status: 401 })
                }

                return HttpResponse.json({
                    id: 'abcd',
                })
            }),
        ]

        const server = setupServer(...handlers)
        server.listen()
    })

    test('fetch a workflow', async () => {
        const client = createClient('myToken')

        const workflow = await client.GET('/workflow/{id}', {
            params: {
                path: {
                    id: 'abcd',
                },
            },
        })

        if (workflow.error !== undefined) {
            throw new Error(`Couldn't fetch workflow due to: ${workflow.error.message}`)
        }

        const data: operations['getWorkflowById']['responses']['200']['content']['application/json'] = workflow.data
        expect(data.id).toBe('abcd')
    })
})
