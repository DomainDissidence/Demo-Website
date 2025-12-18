import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteToml } from "vite-plugin-toml";


export default defineConfig({
    base: "/demo.domaindissidence.online/",
    plugins: [
        vue(),
        ViteToml()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
