import prettier from "eslint-config-prettier";
import ts from "typescript-eslint";
import globals from "globals";

export default [
  ...ts.configs.recommended,
  prettier,
  {
    ignores: ["**/node_modules/**", "**/*.js"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
    rules: {
      curly: "warn",
      "default-case-last": "warn",
      eqeqeq: "error",
      "no-array-constructor": "error",
      "no-console": "warn",
      "no-else-return": "warn",
      "no-multi-assign": "error",
      "no-nested-ternary": "error",
      "no-param-reassign": "error",
      "no-return-assign": "warn",
      "no-sequences": "error",
      "no-template-curly-in-string": "warn",
      "no-throw-literal": "error",
      "no-undef-init": "warn",
      "no-unneeded-ternary": "warn",
      "no-unused-private-class-members": "warn",
      "no-useless-rename": "warn",
      "no-var": "error",
      "prefer-const": "off", // Messes with $props runes
      "prefer-promise-reject-errors": "warn",
      "prefer-template": "warn",
      radix: "warn",
      "require-yield": "warn",
      "spaced-comment": "warn",
      yoda: ["error", "never", { exceptRange: true }],
      "one-var": ["error", "never"],
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];
