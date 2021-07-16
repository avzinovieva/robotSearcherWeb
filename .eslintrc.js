module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    plugins: [
        'react',
        "@typescript-eslint"
    ],

    rules: {
        "no-shadow": "off",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "linebreak-style":0,
        "@typescript-eslint/no-use-before-define": ["error"],
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".tsx",
                    ".ts"
                ]
            }
        ],
        "import/extensions": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    },
};
