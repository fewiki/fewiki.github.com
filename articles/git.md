# 前端团队git规范

## 介绍

这是我们团队的 Git 分支管理规范。每个人对工具的使用往往各有偏好，各种方法各有利弊，无所谓对错。但涉及团队协作的方面需要有一些一致的规范，所以请大家务必遵守。

除了一致性之外，这个规范的目的是以下几点：

确保可以轻易确定特定时间发布或运行的版本。在新发布的程序存在重大缺陷时，可以尽快 rollback 到上一个稳定版本。
在需要修复紧急 bug 并尽快发布时，可以只发布必要的 bugfix 而不同时发布还不应发布的其他改动。


## branch 和 tag

每个repo有且仅有以下的 branch 和 tag。

Branch: master 、release 和 研发分支。其中：
- master 对应目前的开发分支，所有的 研发分支 需要合并到此分支。
- release 是当前发布的分支，在这个分支只能增加从 master 发布 过来的 commit。详见本文后面的说明。
- 研发分支需要master切出，然后开发完成后，提交合并请求到 master. 研发分支命名规范待补充。

Tag: 对应每个发布版本的 tag。tab版本号与云平台版本一致，命名 cloud_版本号_日期，如：cloud_4.0_20171226



## 发布新版流程

确保所有要发布的 pull request 都已经 merge 到 master；
使用 master branch 的代码进行测试，如果发现 bug，把对应的 bugfix merge 到 master；
删除旧的 release branch，并从当前的 master 创建新的 release branch；
在 Jenkins 上从 release branch 发起新的 build 并发布；
发布完成后在当前的 release branch 打上对应版本的 tag。


## Bugfix 流程

- master的bug，直接在master中修正
- release的bug，不紧急的放下一版master统一处理，紧急的 待补充，应该从小版本发布 测试 避免此类问题
