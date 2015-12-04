# 移动端开发
ionic是一个强大的混合式/hybridHTML5移动开发框架，特点是使用标准的HTML、 CSS和JavaScript，开发跨平台（目前支持：Android、iOS，计划支持：Windows Phone、Firefox OS） 的原生App应用：

![ionic](http://r.ionichina.com/Fn6efI862y-kPGkpAUnaQddKDGKo)

ionic主要包括三个部分：

CSS框架 - 提供原生App质感的CSS样式模拟。ionic这部分的实现使用了ionicons图标样式库。
JavaScript框架 - ionic基于AngularJS基础框架开发，遵循AngularJS的框架约束；主要提供了适应移动端UI的 AngularJS的扩展，主要包括指令和服务。此外，ionic使用AngularUI Router来实现前端路由。
命令行/CLI - 命令行工具集用来简化应用的开发、构造和仿真运行。ionic命令行工具使用了 Cordova，依赖于平台SDK（Android & iOS）实现将移动web项目打包成原生app。
由于ionic使用了HTML5和CSS3的一些新规范，所以要求 iOS7+/ Android4.1+。 在低于这些版本的手机上使用ionic开发的应用，有时会发生莫名其妙的问题。

ionic.js : 指令

ionic.js对AngularJS进行了扩展，它的主要贡献是将移动端开发中常见 的UI组件抽象成AngularJS的指令，便于我们可以在HTML开发中快速应用。

比如，我们使用ion-tabs指令就可以实现一个功能完备的选项卡：

    <ion-tabs>
        <ion-tab title="首页">...</ion-tab>
        <ion-tab title="交流">...</ion-tab>
        <ion-tab title="设置">...</ion-tab>
    </ion-tabs>
ionic.js实现的指令基本覆盖了移动端开发所需，下面的图可以帮助我们快速简要地了解 ionic.js的能力：

001.png

ionic.js : 路由管理

在单页应用（Single Page App）中，路由的管理是很重要的环节。ionic.js 没有使用AngularJS内置的ng-route模块，而是选择了AngularUI项目 的ui-router模块。

ui-router的核心理念是将子视图集合抽象为一个状态机，导航意味着 状态的切换。在不同的状态下，ionic.js渲染对应的子视图（动态加载的HTML片段） 就实现了路由导航的功能：

002.png

ionic.js : 手势支持

考虑到移动应用交互的特点，ionic.js也提供了手势操作的事件，比如：

hold - 长按
tap - 敲击
drag - 拖动
swipe - 滑动
…
003.png