import createFetchClient, {type Client} from 'openapi-fetch'
import type {paths} from './schema.js'

export function createClient(token: string): Client<paths> {
    return createFetchClient<paths>({
        baseUrl: 'https://circleci.com/api/v2',
        headers: {
            'Circle-Token': token,
            'Content-Type': 'application/json',
        },
    })
}
