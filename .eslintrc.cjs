const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['warn', 4],
        'no-unused-vars': 'warn',
        'no-console': [
            isProd ? 'error' : 'warn',
        ],
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
