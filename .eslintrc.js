module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'prettier',"plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript","plugin:@typescript-eslint/recommended"],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-undef': 'off',
          "no-unused-vars": "off",
          "@typescript-eslint/no-unused-vars": ["error"]
        },
      },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react','@typescript-eslint'],
    rules: {
      'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      "import/extensions": [
         "error",
         "ignorePackages",
         {
           "js": "never",
           "jsx": "never",
           "ts": "never",
           "tsx": "never"
         }
      ]},



    settings: {
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {
          "directory": "./tsconfig.json"
        },
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
};


