'use strict';

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "array-callback-return": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "indent": [
            "error", 2, {
                "SwitchCase": 1
            }
        ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "error",
        "no-await-in-loop": "error",
        "no-control-regex": "error",
        "no-duplicate-imports": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implicit-coercion": [
            "error",
            {
                "boolean": false,
                "number": true,
                "string": true,
                "disallowTemplateShorthand": false
            }
        ],
        "no-implicit-globals": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-new-func": "error",
        "no-prototype-builtins": "error",
        "no-trailing-spaces": "error",
        "no-unsafe-negation": "error",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "quotes": [
            "error",
            "single"
        ],
        "require-atomic-updates": "error",
        "require-awaiter": "error",
        "rest-spread-spacing": "error",
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error"
    }
}
