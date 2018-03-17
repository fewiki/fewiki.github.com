# React 脚手架构 
（请在知识库中查看，效果更佳 https://fewiki.github.io/#!articles/rules/react-cli.md）

## 架构内容

> 基于create-react-app https://github.com/facebook/create-react-app

> react-router路由 https://github.com/ReactTraining/react-router

> axios 请求数据  https://github.com/axios/axios

> 组件通信 redux/mobx(待定)

> 用less编写css  https://shimo.im/docs/SSxetu8RLDEfZChF

> es6 es7（使用装饰器进行接口代理）

> web端UI库: ant-design https://ant.design/

> 移动端UI库: ant-design-mobile https://mobile.ant.design

> iconfont字体图标库

> 基于webpack自动热刷新 打包


===============================================================
## 文件结构说明
- build 打包生成的文件目录
- config webpack运行配置
- docs 使用说明文档
- public 为静态资源文件夹
    - fe-lib  包括第三方库文件
    - webconfig 公用配置
    - static 项目中用的图片 音频等公用文件
- scripts 是webpack 命令
- src 为代码目录
    - index.js 入口js，引入一些通用的js
    - App.js 挂载路由,页面入口，引入全局less router
    - _tests_ 单元测试目录
    - api 接口目录
    - components 公用组件目录
        - async 异步组件
        - directive 公用指令 组件
        - loading 公用加载
    - less 公共样式文件
        - frontend.less 基本入口
        - basic 基本公用 样式
        - skin.less 全局 主题色 字体大小 样式
    - pages 页面和业务组件
    - redux/mobx 组件通信（待完善）
    - router 路由配置
    - utils 工具库
        - filter 过滤器方法
        - editor 编辑器相关 富文本处理
        - service 公用服务，如axios拦截器等
- .babelrc 配置babel编译
- .env 配置 环境相关
- .eslintignore eslint校验
- .gitignore 不参与版本跟踪的文件
- .gitmodules git子模块
- config-overrides creat-react-app 的重置项，详见使用说明
    
==================================================================


## 运行方式

``` bash
# 安装

// 安装依赖
1. yarn install
// 安装公共库依赖 fe-lib  webconfig
2. git submodule update --init --recursive

3. 需复制/public/webconfig/webconfig_example.js为webconfig.js

// 运行项目，运行在 localhost:xxxx（端口号可在package.json中更改）
4. npm run dev

// 运行单元测试
5. npm run test 

=========================================================================
以下为生产环境运行
=========================================================================
# build for production with minification
npm run build

可安装开发工具：https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon
```

=========================================================================

## 内容定制

### 1 端口修改

- 修改 .env文件，设置npm start的启动端口: PORT=xxx

### 2 设置根路径
- 用于 引入组件等时，直接从根路径下引入，不需要'../../', 设置方式： NODE_PATH=src/


=========================================================================


## 使用说明

#### 1 filter 过滤器 使用指南

- 适用范围：静态内容处理， 编辑器富文本内容处理，数据转换等
- 存放位置：src/utils/filter

使用方式
```
window.filter.xxx.xxx()
// 示例
<span>{window.filter.DateConvert.toDay(this.state.date)}</span>

```

### 2 directive 指令 使用指南

- 其实就是一个公用 组件（react 一切都是组件）
- 适用范围：异步内容处理  面向切面的编程？
- 存放位置：src/components/directive

使用方式
```
<AjaxHtml htmlUrl={this.state.htmlUrl}></AjaxHtml>

// 示例
<AjaxHtml htmlUrl={this.state.htmlUrl}></AjaxHtml>

```



=========================================================================
## API代理服务配置(待完善)
```
1. 下载 node 代理服务到本地启动,并修改相关配置

git clone http://code.tfedu.net/frontend/node-api-proxy.git

2. 修改本项目webconfig.js  

添加 window.nodeApi = "http://localhost:3030"    //本地代理服务地址  生产环境需改为线上代理地址

3. 修改 src/utils/server/server.js 23行
	//拼接代理服务标识
    if(config.url.indexOf('?')>-1){
        config.url += '&plattype=TestServer'
    }else{
        config.url += '?plattype=TestServer'
    }
```
将TestServer改为在node代理服务中配置的serverList名字

=========================================================================

## 基于create-react-app定制的内容

大量定制在这个一版本中添加（http://code.tfedu.net/frontend/react-cli/commit/a88e5f78abae0bbecf69987291adc9b3dcb7971e）

- 修改less部分

```
// 修改 webpack.config.dev.js和webpack.config.prod.js，增加以下内容：
{
            test: /\.less/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
               {
                loader: require.resolve('less-loader')
              },
            ],
          }

```

- config-overrides.js 定制如下：

```
// 修改antd默认配置
const { injectBabelPlugin } = require('react-app-rewired');
// hot loader
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
// mobx
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
	config = rewireMobX(config,env);
	config = rewireReactHotLoader(config, env);
    return config;
};

```

- 定制热更新

```
	// 修改webpack.config.dev.js，增加以下内容，详细请参考：http://www.lixuejiang.me/2017/08/09/%E7%BB%99create-react-app%E5%88%9B%E5%BB%BA%E7%9A%84%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0react-hot-loader/
	 'react-hot-loader/patch',

```

- 去掉sourceMap,加快编译速度

```
// 修改webpack.config.prod.js
const shouldUseSourceMap = false;

```

- 去掉文件chunkhash，提高文件复用性

```
// 修改webpack.config.prod.js，多处修改
const cssFilename = 'static/css/[name].css';
filename: 'static/js/[name].js',

```

- 文件打包排除 webconfig和fe-lib

```
// 修改build.js
return file !== paths.appHtml && /webconfig/.test(file) !== true && /fe-lib/.test(file) !== true

```


## TODO
- mobx store触发事件更新
- 组件通信规范
- demo合集 展示
- 全局组件
- 全局loading
- 抽取公用组件库 公用方法等
- 代理服务器完善



