import js from "@eslint/js";

export default [
  {
    ignores: ["sketch-frametool.sketchplugin/**"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        NSPasteboard: "readonly",
        NSPasteboardTypeString: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ["warn", "always"],
      "block-spacing": ["warn", "always"],
      "no-console": "off",
      "no-unused-vars": ["warn", { vars: "all", args: "none" }],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "no-multiple-empty-lines": ["warn", { max: 1 }],
      "no-var": "error",
      "no-empty": "warn",
      "object-curly-spacing": ["warn", "always"],
      "operator-assignment": ["warn", "always"],
      "spaced-comment": ["warn", "always"],
      "capitalized-comments": ["warn", "always", { ignoreConsecutiveComments: true }],
      "comma-spacing": "warn",
      eqeqeq: "error",
      quotes: ["warn", "double", { allowTemplateLiterals: true }],
      "prefer-const": "warn",
    },
  },
];
