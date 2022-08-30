/// <reference types="vitest" />
/// <reference types="vite/client" />

// Additional config operations on top of normal config

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // remove possible inline test code from generated files after npm run build
    // define: {
    //     "import.meta.vitest": "undifined"
    // },
    test: {
        globals: true,
        environment: 'jsdom', // or 'jsdom', 'node', 'happy-dom'
        setupFiles: '/src/test/test-setup.ts',

        // //check in src js or ts for inline testing
        // includeSource: ["src/**/*.{js,ts}"],
        // coverage: {

        //     // Additional ways to receive report: text, json, html and etc.
        //     // generate outdoorsy/coverage/index.html
        //     reporter: ['text', 'html']
        // },
    }
})