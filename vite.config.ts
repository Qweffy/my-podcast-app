import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    plugins: [react(), EnvironmentPlugin('all')],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            pages: path.resolve(__dirname, './src/pages'),
            types: path.resolve(__dirname, './src/types'),
            api: path.resolve(__dirname, './src/api'),
        },
    },
})
