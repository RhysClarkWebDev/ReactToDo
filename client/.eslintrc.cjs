module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json'
    },
    ignorePatterns: [
        'dist',
        'client/webpack.common.cjs',
        '.eslintrc.cjs'
    ],
    plugins: [
        'react'
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 4 }],
        'max-len': ['error', { code: 120 }],
        "react/prop-types": "off"
    }
}
