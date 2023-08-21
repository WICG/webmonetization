import fs from "fs";
import path from "path";

const LOCAL_COMPONENT_DIR = "src/overrides";

export default function overrideIntegration() {
  return {
    name: "overrides",
    hooks: {
      "astro:config:setup"({ updateConfig, config }) {
        const components = fs
          .readdirSync("./" + LOCAL_COMPONENT_DIR)
          .filter((x) => x.endsWith(".astro"));

        updateConfig({
          vite: {
            plugins: [
              {
                enforce: "pre",
                name: "override",
                async resolveId(source, importer) {
                  for (const component of components) {
                    if (
                      source.endsWith(component) &&
                      !source.includes(LOCAL_COMPONENT_DIR) &&
                      !source.includes("node_modules")
                    ) {
                      if (importer.includes(LOCAL_COMPONENT_DIR)) {
                        return path.resolve(
                          "./node_modules/@astrojs/starlight/components/" +
                            component
                        );
                      } else {
                        return path.resolve(
                          "./" + LOCAL_COMPONENT_DIR + "/" + component
                        );
                      }
                    }
                  }
                },
              },
            ],
          },
        });
      },
    },
  };
}
