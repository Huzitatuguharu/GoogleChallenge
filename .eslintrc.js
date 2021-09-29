module.exports = {
  plugins: [
    "vue"
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // タグの最後で改行しないで
    "vue/html-closing-bracket-newline": [2, {"multiline": "never"}],
    // 不要なカッコは消す
    "no-extra-parens": 1,
    // 無駄なスペースは削除
    "no-multi-spaces": 2,

    // jsのインデントは２
    "indent": [2, 2],

    // カンマの前後にスペース入れる
    "comma-spacing": 2,

    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore'//aタグの羅列などで変な風にならないように追記
      }
    ]

  }

}
