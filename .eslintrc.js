// https://eslint.org/docs/user-guide/configuring

module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    parserOptions: {
        //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
        parser: "babel-eslint"
    },
    //此项指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true
    },
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    // required to lint *.vue files
    //此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    plugins: ["vue"],
    // add your custom rules here
    // "off" -> 0 关闭规则
    // "warn" -> 1 开启警告规则
    //"error" -> 2 开启错误规则
    rules: {
        // allow async-await
        "generator-star-spacing": "off",
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
