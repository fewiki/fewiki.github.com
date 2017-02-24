# 1. 知好乐前端angular web架构

- 基于angularjs MVC架构   https://angularjs.org/
- 基于bootstrap响应式布局  http://v3.bootcss.com/
- 基于ui-bootstrap 组件化  http://angular-ui.github.io/bootstrap
- 基于 less实现css可编程
- 基于gulp实现前端 自动化
- 整合jquery，更灵活的DOM操作 http://v3.bootcss.com/components/
- 整合underscore，更灵活的数组操作  http://www.bootcss.com/p/underscore/
- 集成font-awesome iconfont等字体图标  http://www.bootcss.com/p/font-awesome   http://iconfont.cn/
- 整体 animatecss等动画效果  https://daneden.github.io/animate.css/
- 易扩展 和集成 第三方更多框架或插件  如：http://ngmodules.org/

# 2.整体代码结构

```
project
│ +- dist                 //打包文件夹
│ +- config               //配置文件夹
│ +- modules              //接入第三方模块时放入
│ +- src                  //源代码目录
│ -- README.md            //说明文件
│ -- .gitignore           //git忽略提交文件
│ -- gulpfile.js          //前端自动化文件
│ -- package.json         // 前端自动化 依赖包 列表
│ -- package-dist.json    // 打包到生产环境 依赖包 列表
└ -- server.js            // 生产环境 nodejs服务入口文件，随着项目不致，可以取不同的名称，方便后台管理进程
```
## 2.1 src前端代码结构
```
 ─src
    │ +- assets                 // 静态资源文件夹 ，包括图片等
    │	└ +- img
    │	└ +- swf
    │----------------------------------------------------------------------
    │ +- coms                   // 基于页面的模块化
    │  │ - coms.module.js       // 页面模块注入文件
    │  │ - mainCtrl.js          // 最顶层controller
    │  └ +- layout              // 公用页面布局 模块，一般包括header  footer等
    │  │  └ +- header
    │  │  │	└ - header.html      // 头部 公用页面
    │  │  └ +- footer
    │  │  │	└ - footer.html       // footer 公用页面
    │  │  └ -layout.moudule.js     // 公共页面 控制文件
    │  └ +- page-mudules
    │  │  └ +- view
    │  │  │	└ - page-mudules.html
    │  └--└ -page.moudule.js
    │-----------------------------------------------------------------------
    │ +- js                     // 公共与服务类js文件
    │  │ - app.js               // js入口文件
    │  │ - config.js            // 前端配置文件
    │  │ - version.js           // 版本管理 升级信息等 配置文件
    │  └ +- directives          // 公用 指令文件夹 后面可考虑拆分文件
    │  │  └ -directives.js
    │  └ +- filters             // 公用 过滤器广播夹 后面可考虑拆分文件
    │  │  └ -filters.js
    │  └ +- interceptors          // 通用http api请求管理 文件
    │  │  │ -CacheInterceptor.js     修改http请求，增加header等
    │  │  └ -LoaderInterceptor.js    api请求进度条
    │  └ +- services              // 共用 服务管理文件
    │  │  │ - ModalMsg.js            弹出框服务
    └  └  └ - js-global-ctrl.js      全局公用函数
    │-----------------------------------------------------------------------
    │ +- less                    // less样式文件
    │  │ - frontend.less         // 前端less引入文件，都在这里注入引用
    │  │ - font.less             // 基本字体大小 和配色 配置文件
    │  │ - page.less             // 目前less按page走，也可按模块走
    │-----------------------------------------------------------------------
    │ +- lib                     //库文件，可用bower管理，但由于前端变化太快，现手动引入
    │-----------------------------------------------------------------------
    │ - favicon.ico              // 小图标
    │ - dist.html                // 打包所用文件
    │ - index.html               // 研发入口文件
    └ -----------------------------------------------------------------------
```

# 3.代码规范

- 坚持制定好的代码规范
- 无论团队人数多少，代码应该同出一门
- 先规范，才有自有
- 享受MVC带来的快乐和编程的乐趣
## 3.1 总体规范

- 直接参照腾讯的吧，咱们也向大公司看齐  http://alloyteam.github.io/CodeGuide/
  
  为了使开发更高效
   在文件命名上必须规范，接合在项目中就是
 - 文件名 必须英文，不能用中文
 - 模块名中间用 - 连接
 - css class命名用下划线链接  id用 驼峰命名
 - js 常量 全大写  变量驼峰命名


## 3.2 less规范


- 把less放在靠前的位置，是因为它重要啊...
- 是因为css目前还是全局的，不容易管理，当css很多时，不好管理，也不好控制了


### 3.2.1 less规范实践

 - frontend.less中引入需要的less文件
 - font.less 在项目开始时就定义好，基本的字体大小和配色，具体内容由UI提供
 - basic.less中引入 基本的样式处理
 - modules.less 引入
 - less命名以page模块打头，保证和page命名的一致性
 - 非公用的less尽量在页面里用 当前页面id打头，这样好定位，也保证不与其他css冲突
 - 能用字体图标咱们就用，三个字，方便啊
 
 
## 3.3 html规范
 - 每个html，要取一个唯一的id标识，id取名与page模块打头
 - html基本都小写，除了文件头
 

## 3.4 js规范
 - 严格执行js 注释规范，包括单行注释 和 多行注释 ，函数必须用多行注释，注明功能 参数和返回类型
 - factory里定义api
 - controller能拆份就可以拆分，一个js尽量不要超过500行
 - 待补充...
 
 
# 4.最佳实践

 - 双课堂 http://skt.tfedu.net
 - 资源中心 http://101.200.192.79