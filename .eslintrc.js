module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
//   "prettier/prettier": [
//     "error",
//     {
//       "endOfLine": "auto"
//     },
//   ],
  // add your custom rules here
  rules: {
    "no-console": 2,
    "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        },
      ],
  },
}
