import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3030,
        allowedHosts: ['totem.centromedicoroma.com.br', 'localhost'],
    },
    plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
});
