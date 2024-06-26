import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    plugins: [react(), EnvironmentPlugin('all')],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            context: path.resolve(__dirname, './src/context'),
            pages: path.resolve(__dirname, './src/pages'),
            providers: path.resolve(__dirname, './src/providers'),
            types: path.resolve(__dirname, './src/types'),
            api: path.resolve(__dirname, './src/api'),
            utils: path.resolve(__dirname, './src/utils'),
        },
    },
})
