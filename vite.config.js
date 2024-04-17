import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/characters': {
                target: 'https://developer-lostark.game.onstove.com',
                changeOrigin: true,
                secure: false,
                ws: false,
            },
        },
    },
    plugins: [react()],
});
