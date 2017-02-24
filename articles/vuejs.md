# 1. 知好乐前端vuejs web架构

> 基于vue-cli https://github.com/vuejs/vue-cli
> 基于vue.js2.0 http://vuefe.cn/
> vue-router 2.0  http://router.vuejs.org/zh-cn/index.html
> Element UI http://element.eleme.io/
> fontawsome 字体图标  http://fontawesome.io/
> 用less编写css
> es6 es7
> 基于webpack自动刷新 打包

===================
# 架构说明

## 文件结构说明

- build 为webpack 程序
- config 为webpack配置文件
- src 为代码目录
- static 为静态文件目录，包括 图片等静态资源文件、第三方库等
- webconfig 为程序跟外接相关的配置文件
- index.html 程序入口文件

## src代码目录 说明
- components 组件目录，主要存放 通用组件，指令 过滤器等
- pages 以页面形式存放 页面结构
- service 主要存放 API以及 通用js
- config.js 跟外界无关的程序配置文件
- main.js js入口文件
- routes.js 路由文件

## 
======================




## 研发环境运行

``` bash
# 安装依赖

// 安装基本依赖，如果vue.js基本框架更新了，需要基于vue-cli的package.json重新 npm install一下
1. npm install

// 安装相关库的最新版本
2. npm install vue-router less less-loader whatwg-fetch babel-polyfill element-ui

# 运行在 localhost:1212  （端口号可在config/index.js中更改）
npm run dev

需 复制config/webconfig_example.js为webconfig.js,并修改对应的 TomcatUrl后端地址



=========================================================================
以下为生产环境运行
=========================================================================
# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

可安装开发工具：https://github.com/vuejs/vue-devtools


注意引入  babel-polyfill，需要更改 webpack.base.conf.js

```
require("babel-polyfill")
entry: {
    app: ['babel-polyfill', './src/main.js']
}
```

// 自定义静态路径 build/dev-server.js
app.use('/webconfig', express.static('./webconfig'))