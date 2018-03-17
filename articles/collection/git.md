> 常用git命令一览

1. 重定向 git 仓库地址： git remote set-url origin [url]
2. 删除文件夹在git仓库的缓存： git rm --cached [webconfig]
3. 删除公共库代码： 更改.submodule 更改.git->config 删除git缓存 git rm --cached 文件夹名
4. 更新最新公共库版本  git submodule foreach git pull origin master