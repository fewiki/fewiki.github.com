# 接口文档

## 1.接口 规范
- 数据以json传递
- 指令全小写，用_连接，如 on_task_complete
- 数据请求 统一格式
```
｛  
    command: '', // 固定写法，同接口名
    data: '',     // 数据内容，可以为 string array 和 object，尽量以object形式
｝
```
- 数据返回 统一格式
```
｛  code: '',     // 返回数据是否正确判断，OK正确，error错误
    command: '', // 固定写法，同接口名
    data: '',     // 返回数据内容，可以为 string array 和 object，尽量以object形式
｝
```
## 2.连接方式
引入socket.io，连接服务器，如：http://chat.tfedu.net:12309



## 3.接口 定义

### 3.1用户相关接口
- 以user打头

#### 上传用户信息
```
接口名：user-upload-userinfo
类型： server/on  client/emit
接口参数：
｛  
    command: 'user-upload-userinfo', // 固定写法，同接口名
    data:{
        userId: '',     // 用户名，必须
        trueName: '',   // 真实姓名， 必须
        avatarImg: ''   // 头像， 必须
    }
｝

```

#### 用户被踢通知
```
接口名：user-force-logout
接口参数： server/emit  client/on
｛  
    command: 'user-force-logout', // 固定写法，同接口名
    data:'' // 提示内容
｝

```


### 3.2教室相关指令

#### 加入教室
```
接口名：room-join-user
接口参数： server/emit  client/on
｛  
    command: 'room-join-user', // 固定写法，同接口名
    data: ｛
        roomId: '',  // 教室id
        roomName: ''  // 教室名称
    ｝
｝

```

#### 离开教室
```
接口名：room-leave-user
接口参数： server/emit  client/on
｛  
    command: 'room-leave-user', // 固定写法，同接口名
    data: ｛
        roomId: '',  // 教室id
    ｝
｝

```

#### 获取现有教室列表
```
接口名：room-get-roomlist
接口参数： server/emit  client/on
｛  
    command: 'room-get-roomlist', // 固定写法，同接口名
    data: ｛｝
｝

```

#### 获取 单个教室 用户
```
接口名：room-get-userlist
接口参数： server/emit  client/on
｛  
    command: 'room-get-userlist', // 固定写法，同接口名
    data: ｛
        roomId: '',  // 教室id
    ｝
｝

```

#### 获取 单个教室  指令记录
```
接口名：room-get-commandlist
接口参数： server/emit  client/on
｛  
    command: 'room-get-commandlist', // 固定写法，同接口名
    data: ｛
        roomId: '',  // 教室id
    ｝
｝

```

### 3.3打开指令

#### 测试打开
```
接口名：cmd-send-test
接口参数： client/on


```
#### 打开各类资源
```
接口名：cmd-open-work
接口参数： server/emit  client/on
｛  
    command: 'cmd-open-work', // 固定写法，同接口名
    data: ｛
        type: '',  // 模块名 内容类型（1本地资源2系统资源3 学案 4练习5测试6讨论 7 校本资源，8 区本资源，9新版资源中心个人资源，10新版资源中心系统 资源  11 新版资源中心区本资源 12新版资源中心校本资源 13连线 14填空 77游戏）
        resId: ''  // 当前资源id
    ｝
｝

```


### 3.4发送指令
#### 测试发送
```
接口名：cmd-message-test
接口参数： server client/emit
｛  
    command: 'cmd-message-test', // 固定写法，同接口名
    data: '' // 发送内容
｝

```

```