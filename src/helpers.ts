export class Helpers {
    private token: string

    constructor (token: string) {
        this.token = token
    }

    async downloadArtifactFromURL (url: string): Promise<ArrayBuffer> {
        if (!url.startsWith('https://')) {
            throw new Error('Artifacts can only be downloaded via https URL')
        }

        const headers = new Headers()
        headers.set('Authorization', `Basic ${Buffer.from(this.token + ':').toString('base64')}`)
        const response = await fetch(url, { headers })
        if (!response.ok) {
            throw new Error(
                `Failed to fetch artifact from URL: ${url}, got response ${response.status} ${response.statusText}`,
            )
        }
        return response.arrayBuffer()
    }
}