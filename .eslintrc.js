module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        // 1行のとき閉じ括弧の前の改行を禁止.
        singleline: 'never',
        // 複数行のとき閉じ括弧の前に1つの改行が必要
        multiline: 'always'
      }
    ],
    // 不要なカッコは消す
    'no-extra-parens': 1,
    // 無駄なスペースは削除
    'no-multi-spaces': 2,

    //imgタグのようにタグが１つで完結してもOK
    'vue/html-self-closing': 'off',
    // jインデントは２
    'vue/html-indent': ['error', 2],

    // カンマの前後にスペース入れる
    'comma-spacing': 2,

    //aタグの羅列などで変な風にならないように追記
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
}
