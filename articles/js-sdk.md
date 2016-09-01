# 知好乐JS SDK使用说明

### 概述
> 知好乐JS SDK提供js与原生之间的交互说明，方便js调原生的系统功能和自定义功能

## 基本配置

引入 zhl-js-native.js


```
JsNative.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    signature: '',// 必填，签名，
    jsApiList: [] // 必填，调用的接口列表
});

```

## 1.用户信息接口
- 从native获取当前用户信息
- 调用方法：

```
/**
 参数为空
*/
JsNative.onUserInfo()

```

- 返回数据

```json
{
  "trueName": "lgzhang",
  "token": "ABF0D6B9A2F944149343ABED666BD9B2",
  "nickName": "''",
  "male": 0,
  "userId": 50787350136,
  "userImg": "http://7xs551.com1.z0.glb.clouddn.com/108-1.png",
  "vipEnd": "2016-08-23 09:25:04.0",
  "termId": 2
}
```

## 2.通用数据传递 接口
- 从native获取数据
- 调用方法：

```
/**
 param key, 数据类型
*/
JsNative.onDataNotify('key')

```

- 返回数据

```json
{
  "key": "info",
  "data:"...."
}
```

## 3.图片轮播
- 调用native图片轮播
- 调用方法：

```
/**
 param array, 图片数据
*/
JsNative.onPhotoBrowser([])

```

## 4.调用浏览器 接口
- 调用native浏览器打开页面
- 调用方法：

```
/**
 param url string, 链接
*/
JsNative.onOpenBrowser(url)

```