import { defineConfig } from 'vite'

export default defineConfig({
    root: './src',
    server: {
        open: "./index.html"
    },
    server: {
        port: 3000,
    },
    build: {
        outDir: "../dist"
    },
})