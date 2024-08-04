import {expect, test, vi} from 'vitest'
import createFetchMock from 'vitest-fetch-mock'
import {createClient, getWorkflowById, type GetWorkflowByIdResponse} from './index.js'

async function getUnderlyingErrorMessage<T>(f: () => Promise<T>): Promise<string> {
    try {
        await f()
    } catch (error) {
        if (error instanceof Error && error.cause instanceof Error) {
            return error.cause.message
        }

        throw error
    }

    throw new Error('Wrapped function didn\'t throw')
}

test('global client is disabled', async () => {
    const error = await getUnderlyingErrorMessage(async () =>
        getWorkflowById({
            path: {
                id: 'abcd',
            },
        }),
    )

    expect(error).toMatch('global+client+is+disabled')
})

test('fetching with local client', async () => {
    const fetchMocker = createFetchMock(vi)
    fetchMocker.enableMocks()

    fetchMocker.mockIf(/^https?:\/\/circleci.com.*$/, request => {
        if (request.url.endsWith('/api/v2/workflow/abcd') && request.headers.get('Circle-Token') === 'myToken') {
            const resp: Partial<GetWorkflowByIdResponse> = {
                id: 'abcd',
            }

            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resp),
            }
        }

        return {
            status: 404,
            body: 'Not Found',
        }
    })

    const client = createClient('myToken')

    const workflow = await getWorkflowById({
        client,
        path: {
            id: 'abcd',
        },
    })

    expect(workflow.data?.id).toBe('abcd')
})
