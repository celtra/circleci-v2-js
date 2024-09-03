/* eslint-disable @stylistic/ts/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
export interface artifactPaths {
    "/output/job/{uuid}/artifacts/{node-index}/{path}": {
        get: artifactOperations['getArtifact']
    }
}

export interface artifactOperations {
    getArtifact: {
        parameters: {
            query?: never
            header?: never
            path?: {
                uuid: string
                "node-index": string
                path: string
            }
            cookie?: never
        }
        requestBody?: never
        responses: {
            200: {
                headers: Record<string, unknown>;
                content: string;
            };

            /** @description Error response. */
            default: {
                headers: Record<string, unknown>;
                content: string;
            };
        };
    };
}