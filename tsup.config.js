import {defineConfig} from 'tsup'

export default defineConfig({
    entryPoints: ['src/index.ts'],
    outDir: 'dist',
    target: 'esnext',
    format: 'esm',
    dts: true,
    clean: true,
    sourcemap: true,
})
