import createFetchClient, { type Client } from 'openapi-fetch'
import type { components, operations, paths } from '../schema'
import type { artifactOperations, artifactPaths } from 'schema/artifactIndex'

export type { paths, components, operations, artifactOperations, artifactPaths }

export function createClient (token: string): { api: Client<paths>,
    artifacts: Client<artifactPaths> } {
    return { api: createFetchClient<paths>({
        baseUrl: 'https://circleci.com/api/v2',
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Circle-Token': token,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json',
        },
    }),
    artifacts: createFetchClient<artifactPaths>({
        baseUrl: 'https://output.circle-artifacts.com',
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Circle-Token': token,
        },
    }) }
}
