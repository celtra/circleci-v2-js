import {defineConfig} from 'tsup'

export default defineConfig({
    entryPoints: ['src/index.ts'],
    outDir: 'dist',
    target: 'esnext',
    format: 'esm',
    external: ['@hey-api/client-fetch'],
    dts: true,
    clean: true,
    sourcemap: true,
})
