// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.tsx'],
//             refresh: true,
//         }),
//         react(),
//         tailwindcss(),
//     ],
//     server: {
//         host: '0.0.0.0', 
//         watch: {
//             ignored: ['**/storage/framework/views/**'],
//         },
//         allowedHosts: ['ribidesigncraft-dev.onrender.com'], 
//     },
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, 'resources/js'),
//         },
//     },
//     preview: {
//         host: '0.0.0.0', 
//         port: process.env.PORT || 5173, 
//         allowedHosts: ['ribidesigncraft-dev.onrender.com', '.onrender.com'], 
//     },
// });

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    server: {
        host: 'localhost', 
        port: 5173,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    build: {
        outDir: 'public/build',
        manifest: true,
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
});