import eslintTs from 'typescript-eslint'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'

export default [
    ...eslintTs.configs.recommendedTypeChecked,
    ...eslintTs.configs.stylistic,
    stylisticTs.configs['all-flat'],
    {
        ignores: [
            '**/node_modules',
            'eslint.config.mjs',
            '**/dist',
            'schema/index.d.ts',
            'schema/artifactIndex.d.ts',
            'tsup.config.js',
        ],
    },
    {
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                project: './tsconfig.json',
            },
            globals: {
                process: true,
            },
        },
        plugins: {
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.ts'],
                },
            },
        },
        rules: {
            '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/ts/quote-props': ['error', 'as-needed'],
            '@stylistic/ts/quotes': ['error', 'single', {avoidEscape: true}],
            '@stylistic/ts/semi': ['error', 'never'],
            '@stylistic/ts/member-delimiter-style': 'off',
            '@stylistic/ts/object-curly-spacing': ['error', 'always', {objectsInObjects: false}],

            // "eslint-plugin-import" doesn't work properly in flat eslint configuration
            // but some recommended rules can be applied from it directly until the plugin is upgraded
            // see https://github.com/import-js/eslint-plugin-import/issues/2556
            'import/no-unresolved': 'error',
            'import/named': 'error',
            'import/default': 'off',
            'import/export': 'error',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/no-duplicates': 'warn',
            'import/first': 'error',
            'import/namespace': 'off',

            'max-len': ['error', {code: 120}],
            'sort-imports': ['error', {ignoreDeclarationSort: true, ignoreCase: true}],
            eqeqeq: ['error', 'always'],
            'spaced-comment': ['error', 'always'],
            'arrow-spacing': ['error'],
            'key-spacing': ['error'],
            'space-infix-ops': ['error'],
            'no-else-return': ['error'],
            indent: ['error', 4],

            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'enum',
                    format: ['PascalCase'],
                },
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE'],
                },
                {
                    selector: 'interface',
                    format: ['PascalCase'],
                },
                {
                    selector: 'property',
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'forbid',
                },
                {
                    selector: 'property',
                    format: [
                        'camelCase',
                        'PascalCase',
                        'UPPER_CASE',
                    ],
                },
                {
                    selector: 'class',
                    format: ['PascalCase'],
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
            ],
        },
    },
]
