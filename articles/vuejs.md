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

## 1 文件结构说明

- build 为webpack 程序
- config 为webpack配置文件
- src 为代码目录
- static 为静态文件目录，包括 图片等静态资源文件、第三方库等
- webconfig 为程序跟外接相关的配置文件
- index.html 程序入口文件

## 2 src代码目录 说明
- components 组件目录，主要存放 通用组件，指令 过滤器等
- pages 以页面形式存放 页面结构
- service 主要存放 API以及 通用js
- config.js 跟外界无关的程序配置文件
- main.js js入口文件
- routes.js 路由文件

======================


## 3 编码规范

- 坚持制定好的代码规范
- 无论团队人数多少，代码应该同出一门
- 先规范，才有自有
- 享受MVC带来的快乐和编程的乐趣


### 3.1 总体规范

- 直接参照腾讯的吧，咱们也向大公司看齐  http://alloyteam.github.io/CodeGuide/
  
  为了使开发更高效
   在文件命名上必须规范，接合在项目中就是
 - 文件名 必须英文，不能用中文，全小写
 - 模块名中间用 - 连接
 - css class命名用下划线链接， id用 驼峰命名
 - js 常量 全大写  变量驼峰命名


### 3.2 less规范


- 把less放在靠前的位置，是因为它重要啊...
- 是因为css目前还是全局的，不容易管理，当css很多时，不好管理，也不好控制了
- 虽然vue提供了scoped可以解决css作用域的问题，但会生成 多余的代码，不利于管控


#### 3.2.1 less规范实践

 - frontend.less中引入需要的通用 less文件
 - element-theme.less 中统一重写element样式
 - skin.less 在项目开始时就定义好，基本的字体大小和配色，具体内容由UI提供
 - share.less中引入 基本的样式和全局共享样式，比如圆角头像，
 - less命名保证和page命名的一致性
 - 非公用的less尽量在页面里用 当前页面id打头和当前页class打头，这样好定位，也保证不与其他css冲突
 - 字体大小，统一用rem, 10px=1rem, 高度宽度 可以用px
 - 注释还是要写一写
 - 能用字体图标咱们就用，三个字，方便啊，包括fontawesome 和iconfont里的图标咱们都可以用
 
 
### 3.3 html规范
 - 每个html，要取一个唯一的id标识，id取名与page模块打头
 - html基本都小写，除了文件头
 - 文件块 以空行隔开，并且写上注释
 

### 3.4 js规范
 - 严格执行js 注释规范，包括单行注释 和 多行注释 ，函数必须用多行注释，注明功能 参数和返回类型
 - 严格执行 驼峰命名法
 - service里定义api
 - 共用函数或处理复杂数据函数，统一封装成Class去处理
 - js能拆份就可以拆分，一个js尽量不要超过300行
 - 组件拆分尽量细，子组件不需要将 less js html拆分，写成一个文件即可（太复杂除外）
 - 待补充..



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