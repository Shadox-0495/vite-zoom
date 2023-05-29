import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";

//import { dirname, resolve } from "path";
//import { fileURLToPath } from "url";
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsConfigPaths()],
	server: { open: "/" },
});
