import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-alert": "warn",
      "no-var": "warn",
      "max-depth": ["warn", { max: 3 }],
      "max-statements": [
        "warn",
        { max: 30 },
        { ignoreTopLevelFunctions: true },
      ],
      "no-unused-vars": "off", 
    },
  },
  eslintConfigPrettier,
];
