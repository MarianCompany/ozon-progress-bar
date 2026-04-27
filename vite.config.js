import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: process.env.VITE_BASE_URL || '/',
    build: {
        rollupOptions: {
            input: {
                progress: resolve(__dirname, 'src/js/progress/index.js'),
                demo: 'index.html'
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    return chunkInfo.name === 'progress'
                        ? 'progress/[name].js'
                        : '[name].js'
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.names && assetInfo.names.some(name => name.includes('progress'))) {
                        return 'progress/[name].[ext]'
                    }
                    return '[name].[ext]'
                }
            }
        },
        cssCodeSplit: true
    }
})