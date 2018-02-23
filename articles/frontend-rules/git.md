# 前端团队git规范

## 介绍
```
这是我们团队的 Git 分支管理规范。
每个人对工具的使用往往各有偏好，各种方法各有利弊，无所谓对错。
但涉及团队协作的方面需要有一些一致的规范，所以请大家务必遵守。
```

## 1 branch 和 tag

- 每个repo有且仅有以下的 branch 和 tag。

#### Branch: master 、release 和 研发分支

其中：

- master 受保护，不能直接提交代码，主分支，所有的 研发分支 需要合并到此分支。
- release 受保护，不能直接提交代码， 发布分支，在这个分支只能增加从 master 合并 过来的 commit。紧急bug除外，紧急bug处理方式看后文bugfix。
- 研发分支需要master切出，然后开发完成后，提交合并请求到 master. 研发分支命名参考： https://www.cnblogs.com/kobe1991/p/6944747.html。
即：
master
release
feature/xxx
hotfix/xxx


#### Tag

- 对应每个发布版本的 tag。tab版本号与云平台版本一致，命名 cloud_版本号_日期，如：cloud_4.0_20171226


## 2 发布新版流程

- 确保所有研发分支 都已经 merge 到 master；

- 使用 master branch 的代码进行测试，如果发现 bug，把对应的 bugfix merge 到 master；

- 合并 master 到 release branch；

- 发布完成后在当前的 release branch 打上对应版本的 tag。

- 在 Jenkins 上从 release branch 发起新的 build 并发布；



## 3 Bugfix 流程

- master的bug，直接在master中修正
- release的bug，即正式环境的bug。不紧急的放下一版master统一处理，应该从小版本发布 测试 避免此类问题。实在很紧急，按以下办法处理：

从release分支 切 分支 hotfix-bug,
合并 hotfix-bug --> release

master分支 如果也有这个bug 
合并hotfix-bug --> master 有冲突解决一下
