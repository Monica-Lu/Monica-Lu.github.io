import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '/',
    build: {outDir: 'build'},
    plugins:[
        react(),
        viteTsconfigPaths()
    ],
    server: {
        port: 3000,
        host: true,
        strictPort: true,
        hmr: {
            port: 3010,
        },
        watch:{
            usePolling: true,
        }
    }
})