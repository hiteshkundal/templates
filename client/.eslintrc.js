module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: [
        '@typescript-eslint',
    ],
    ignorePatterns: ['**/*.js'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'arrow-parens': 0,
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'arrow-body-style': 0,
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/camelcase': 0,
        'react/prop-types': 0,
        'function-paren-newline': ['error', 'multiline-arguments'],
        'prefer-arrow-callback': 0,
        'react/button-has-type': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'react/jsx-no-bind': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'jsx-a11y/no-noninteractive-tabindex': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'no-use-before-define': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        '@typescript-eslint/no-use-before-define': 0,
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
