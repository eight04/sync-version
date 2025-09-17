import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist-extension/*", "build", "chrome", "test/*"]
  },
  js.configs.recommended,
  {
    "rules": {
      "dot-notation": 2,
      "max-statements-per-line": 2,
      "no-unused-vars": [2, { "caughtErrors": "none" }],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  }
];
