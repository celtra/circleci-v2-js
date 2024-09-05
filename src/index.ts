import createFetchClient, { type Client } from 'openapi-fetch'
import type { components, operations, paths } from '../schema'
import { Helpers } from './helpers'

export type { paths, components, operations }

export function createClient (token: string): { api: Client<paths>,
    helpers: Helpers } {
    return { api: createFetchClient<paths>({
        baseUrl: 'https://circleci.com/api/v2',
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Circle-Token': token,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json',
        },
    }),
    helpers: new Helpers(token) }
}
