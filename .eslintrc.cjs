module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
     /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,

    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    "comma-style": [2, "last"],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "computed-property-spacing": [2, "never"],
    // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
    // e.g [0,"self"] 指定只能 var that = this. self不能指向其他任何值，this也不能赋值给self以外的其他值
    "consistent-this": [2, "self","that","_self","_that","me","_this"],
    //要求或禁止在函数标识符和其调用之间有空格
    "func-call-spacing": 2,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
    "lines-around-comment": [2, {
      "beforeBlockComment": true
    }],
    "func-style": 0,
    // 强制回调函数最大嵌套深度 5
    "max-nested-callbacks": [2, 5],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": 0,
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    "keyword-spacing": 2,
    // 强制一行的最大长度
    "max-len": [2, 200, { "ignoreUrls": true }],
    // 强制 function 定义中最多允许的参数数量
    "max-params": [1, 5],
    // 强制 function 块最多允许的的语句数量
    "max-statements": [1, 200],
    // 强制每一行中所允许的最大语句数量
    "max-statements-per-line": 0,
    // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }],
   
    // 要求 return 语句之前有一空行
    "newline-before-return": 0,
    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": 1,
    //禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": [
      "error", "smart-tabs"
    ],
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    // 禁止 function 标识符和括号之间出现空格
    "no-spaced-func": 2,

    // 禁止属性前有空白
    "no-whitespace-before-property": 2,
    // 强制操作符使用一致的换行符
    "operator-linebreak": [2, "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],
    // 要求对象字面量属性名称用引号括起来
    "quote-props": 0,
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [2, "single", "avoid-escape"],
    // "semi": [2, "always"],
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": 2,

    //禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中
    "no-case-declarations": ["warn"],
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 禁止类成员中出现重复的名称
    "no-dupe-class-members": 2,
    // 禁止 Symbolnew 操作符和 new 一起使用
    "no-new-symbol": 2,
    // 允许指定模块加载时的进口
    "no-restricted-imports": 0,
    // 要求使用 let 或 const 而不是 var
    "no-var": 1,
    // 要求或禁止对象字面量中方法和属性使用简写语法
    "object-shorthand": 0,
    // 要求使用箭头函数作为回调
    "prefer-arrow-callback": 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": 0,
    // 要求在合适的地方使用 Reflect 方法
    "prefer-reflect": 0,
    // 要求使用扩展运算符而非 .apply()
    "prefer-spread": 0,
    // Suggest using the rest parameters instead of arguments
    "prefer-rest-params": 0,
    // 强制使用一致的换行风格
    "linebreak-style": [2, "unix"],
    // 禁止未使用的变量
    "no-unused-vars": 0,
  },
}


