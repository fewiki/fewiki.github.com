# 互联网版互动课堂（云课堂）技术方案

## 1.整体架构
整体采用分层设计，前后端分离，服务端只提供API服务。引入redis数据库 解决socket.io的数据缓存及共享。

![整体框架][1]

分为以下三层：
- 数据库层
- 终端层
- 后端层
  


各端之间通过http协议以及websocket链接

![整体框架][2]

- socket.io为了解决高并发，需要引入socket.io服务的集群，相互之间通信用redis共享数据，使用用http://Socket.io自带的 [socket.io-redis][3]


部署时，socket.io集群服务可以根据需求选择部署在云端和地区，甚至 教室的教师机上。

![部署结构][4]

## 2.总体流程
用户从上课 参与任务 下课总体流程如下：

![总体流程][6]


详细流程控制

![流程][5]


## 3.接口规范
- 数据以json传递
- 指令全小写，用_连接，如 on_task_complete

详见: 

[接口文档][7]






  [1]: http://7xl900.com1.z0.glb.clouddn.com/0.png
  [2]: http://7xl900.com1.z0.glb.clouddn.com/1.png
  [3]: https://github.com/socketio/socket.io-redis/
  [4]: http://7xl900.com1.z0.glb.clouddn.com/2.png
  [5]: http://7xpwjy.com1.z0.glb.clouddn.com/2017-03-20_143848.png
  [6]: http://7xl900.com1.z0.glb.clouddn.com/process.png
  [7]: http://fewiki.github.io/#!articles/classroom/api.md
	