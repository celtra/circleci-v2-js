import createFetchClient, { type Client } from 'openapi-fetch'
import type { components, operations, paths } from '../schema'

export type { paths, components, operations }

export function createClient (token: string): Client<paths> {
    return createFetchClient<paths>({
        baseUrl: 'https://circleci.com/api/v2',
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Circle-Token': token,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json',
        },
    })
}
