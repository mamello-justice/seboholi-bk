module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    "standard",
    "standard-react",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  plugins: [
    "babel",
    "import",
    "jest",
    "jsx-a11y",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],

  rules: {
    indent: "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },

  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },

  overrides: [
    {
      files: ["**/*.tsx"],

      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
