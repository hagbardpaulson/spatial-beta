module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "airbnb-base",
    ],
    rules: {
        "max-len": ["error", { code: 120 }],
        indent: ["error", 4],
        "vue/order-in-components": ["error"],
        "vue/script-indent": ["error", 4, { baseIndent: 1 }],
        // "indent": ["error", 4, {"baseIndent": 1}],
        // indent: [4],
        "vue/html-indent": ["error", 4, { baseIndent: 1 }],
        "no-tabs": 0,
        "no-underscore-dangle": ["error", { allow: ["_case"] }],
        quotes: ["error", "double"],
        "linebreak-style": 0,
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-param-reassign": 0,
        // prettier
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
            },
        },
    ],
    parserOptions: {
        parser: "babel-eslint",
    }
};