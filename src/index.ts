import {type Client, createClient as createFetchClient} from '@hey-api/client-fetch'
import {client} from './client/services.gen.js'

export * from './client/schemas.gen.js'
export * from './client/services.gen.js'
export * from './client/types.gen.js'

/**
 * Disable global client, so that it's not accidentally used.
 */
client.setConfig({
    baseUrl: 'http://global+client+is+disabled',
    throwOnError: true,
})

export function createClient(token: string): Client {
    return createFetchClient({
        baseUrl: 'https://circleci.com/api/v2',
        headers: {
            'Circle-Token': token,
            'Content-Type': 'application/json',
        },
        throwOnError: true,
    })
}
