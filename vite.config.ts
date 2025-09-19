import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// ...existing code...

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

function componentTagger() {
  // Example Vite plugin that logs each file processed
  return {
    name: "component-tagger",
    transform(code: string, id: string) {
      if (id.endsWith(".tsx") || id.endsWith(".jsx")) {
        console.log(`[component-tagger] Processing: ${id}`);
      }
      return null;
    },
  };
}

