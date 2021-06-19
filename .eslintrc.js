module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:eslint-comments/recommended",
    ],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "curly": ["warn", "multi"],
        "comma-spacing": "warn",
        "eol-last": "warn",
        "eqeqeq": "error",
        "no-bitwise": "error",
        "prefer-const": "error",
        "brace-style": ["error", "allman"],
        "indent": ["error", 4]
    },
};
