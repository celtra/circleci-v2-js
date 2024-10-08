export class Helpers {
    constructor (private token: string) {}

    async downloadArtifactFromURL (url: string): Promise<ArrayBuffer> {
        if (!url.startsWith('https://output.circle-artifacts.com')) {
            throw new Error('Artifact url must start with https://output.circle-artifacts.com')
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