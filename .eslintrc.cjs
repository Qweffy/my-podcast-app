module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vitest.config.ts'], // Agrega vitest.config.ts aquí
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        semi: ['error', 'never'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/default-param-last': ['warn'],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-curly-brace-presence': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
        'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        '@typescript-eslint/ban-ts-comment': 'off'
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
    overrides: [
        {
            files: ['tailwind.config.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
}
