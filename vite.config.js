import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "Portafolio";

export default defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH ?? `/${repoName}/`,
    server: {
        port: 5173,
        host: "0.0.0.0",
    },
});
