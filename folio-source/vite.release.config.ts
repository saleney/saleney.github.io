import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
export default defineConfig({root:"release",publicDir:false,plugins:[react(),tailwind()],resolve:{alias:{"@":fileURLToPath(new URL("./src",import.meta.url))}},build:{outDir:"../release-dist",assetsDir:"folio-assets",emptyOutDir:true}});
