import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all network interfaces so tunnels (ngrok) can reach the dev server.
    host: true,
    // Allow requests coming through ngrok / other tunnels.
    // `true` permits any host; replace with specific hostnames to lock it down, e.g.:
    //   allowedHosts: ['.ngrok-free.app', '.ngrok.io']
    allowedHosts: true,
  },
  // Needed if you also tunnel `vite preview` (the production build).
  preview: {
    host: true,
    allowedHosts: true,
  },
});
