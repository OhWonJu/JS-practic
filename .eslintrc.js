module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",

        "comma-dangle": [
            "error", 
            "always-multiline"
        ],

        "indent": [
            0,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            0,
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};