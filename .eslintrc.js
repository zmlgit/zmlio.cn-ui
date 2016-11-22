module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // parseInt必须指定第二个参数
    'radix': 2,
    // 必须使用全等
    'eqeqeq': 2,
    // 函数前不能有空格
    'space-before-function-paren': [0, 'always'],
    // 小括号中不能有空格
    'space-in-parens': ['error', 'never'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
