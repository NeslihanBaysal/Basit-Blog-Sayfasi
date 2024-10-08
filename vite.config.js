import { defineConfig } from 'vite'
import { resolve } from "path"

export default defineConfig({
    root: './src',
    server: {
        port: 3000,
        open: "./index.html"
    },
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                nested: resolve(__dirname,"src/pages/blog.html")
            }
        }
    },
})