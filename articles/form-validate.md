# 表单验证

##表单中的正则表达式

>正则表达式是用于匹配字符串中字符组合的模式。在JavaScript 中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法以及 String 的 match、replace、search 和 split 方法。

- exec	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
- test	一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
- match	一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
- search	一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
- replace	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
- split	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。

###1.项目常用的正则表达式

```
1.// 判断是否有数据  控制列表显示
if (tmpList.length == 0) {
	this.totalCtrl=true;
	this.$alert("当前还没有选题哦，请继续选题！");
	return;
}
```
```
2.// 判断名称是否为空 正则
if(this.workName ==='') {
	this.$alert("请输入作业或测试名称");
	return;
}
```
```
3.// 判断是否为正整数
var reg = /^\d+(\.\d+)?$/
if(!!this.answerTime && !reg.test(this.answerTime)) {
	this.$alert("请输入正整数");
	return;
}
```
```
4.// 判断不能含有特殊字符		其中n为时候可以回车
var regs = /^[\n0-9A-Za-z_ ,.!?<>~，。— ！？《》·\u4e00-\u9fa5]$/;
if(!regs.test(this.introduction)) {
	this.$alert("应用简介不能含有特殊字符，请修改!");
	return;
}
```
```
5.//限制长度
if(this.developer.length>40 || this.developer.length<6){
	this.$alert("开发者长度在6—40个字符之间，请修改！");
	return;
}
```
```
6.//区分中英文、同时限制
var reg = /^[0-9A-Za-z_ ,.!?<>~]{1,60}$|^[，。— ！？《》·\u4e00-\u9fa5]{1,30}$/;
if(!reg.test(this.workName)) {
	this.$alert("作业或测试名称已经超出了字数限制或者含有了特殊字符，请修改!");
	return;
}
```
```
7.// 判断分值为100以内  正整数或者 .5分值
if (this.setScore>100) {
	this.$alert("请输入100以内的分值");
	return;
}
var dec = /^[0-9]+\.{0,1}[5]{0,1}$/
if(!dec.test(this.setScore)) {
	this.$alert("请输入正整数或者.5的分值");
	return;
}
```
```
8.//判定手机号码正则
var reg = /^1[3,4,5,7,8]\d{9}$/;
if (!reg.test($scope.phoneCode)) {
    ModalMsg.logger("手机号码有误~");
    return ;
}
```
```
9.//判定邮箱正则		\w等价于[A-Za-z0-9_]
if(!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test($scope.authorMsg.email))) {
	ModalMsg.logger('请输入正确的E-mail格式');
	return;
}
```

###2.正则表达式 规范
- 正则表达式 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- JS正则表达式大全(整理详细且实用)http://www.jb51.net/article/43190.htm
- js常用正则表达式http://www.cnblogs.com/zfc2201/archive/2012/12/18/2824107.html
- js正则表达式(极客学院)http://wiki.jikexueyuan.com/project/javascript-core/regular-expressions.html
- JS正则表达式http://www.cnblogs.com/givebest/p/4973835.html

##表单中的接口调用、验证信息

###3.接口函数的封装、调用		实现 保存=>更新=>发布 接口

```
// 保存接口
saveAppEdit: async function(index,realpackagepath,screenshot) {
	let paramsJson = {
		appicon: this.appIcon,
		......
	}
	let tmpData = await AppEditApi.saveAppEdit(paramsJson)
	let resData = await tmpData.json()
	console.log(resData)
	if(resData.code == 'error') {
		this.$alert(resData.message)
		return;
	}
	if(resData.code == 'OK') {
		var appid = resData.data.appid
		console.log(appid)
		//调用更新标签接口
		this.getAppLabel(appid,this.labelIds);
		if(index==1){
			this.$alert("应用保存成功！")
			// 跳转到列表页面
			setTimeout(function(){
				window.location.href = '#appList'
			}, 500)
		}
		if(index==2){
			if(this.applicationTypes ==1){
				// 发布接口
				this.publishBaseApp(appid);
			}else{
				// 跳转到定制应用发布页面
				setTimeout(function(){
					window.location.href = '#AppRelease/' + appid
				}, 500)
			}
		}
	}
},
```
```
// 更新标签接口
getAppLabel: async function(appid,labelIds) {
	let paramsJson = {
		appid:appid,
		labelIds: labelIds,
	}
	let tmpData = await AppEditApi.getAppLabel(paramsJson)
	let resData = await tmpData.json()
	console.log(resData)
	if(resData.code == 'OK') {
		this.$alert("标签更新成功！")
	}
},
```
```
// 发布接口
publishBaseApp: async function(appid) {
	let paramsJson = {
		appid: appid
	}
	let tmpData = await AppEditApi.publishBaseApp(paramsJson)
	let resData = await tmpData.json()
	console.log(resData)
	if(resData.code == 'OK') {
		this.$alert("应用发布成功！")
		// 跳转到列表页面
		setTimeout(function(){
			window.location.href = '#appList'
		}, 500)
	}
}
```

##表单中的逻辑处理

###4.vue中props用于父组件向子组件传值

```
//上传
//<UploadFile ref="subset" :fileSize="'10MB'" :fileFormat="'mp3'"></UploadFile>
export default {
	props: ['fileSize', 'fileFormat'],
	data() {
	}
}

this.subjectId = this.$refs.subset.subjectId,
this.$parent.displayDelete = true;
```

###5.vue中$emit用于子组件向父组件传值

```
//上传APK成功
uploadSuccess: function(file){
	$sessionJsonStorage.set('appInfo', file[0]);
	// 向上广播 上传成功了
	eventHub.$emit('appUploaded', 'OK')
	this.fullscreenLoading = false;
},
```
```
// 获取apk基本信息 包括： 新建 或 编辑
created () {
	this.appInfo = $sessionJsonStorage.get('appInfo')
	console.log(this.appInfo)
	// 赋值
	......
},
```

###6.多个循环、判断 嵌套使用

```
//初始分值、复合题分值
currentScore :function(tmpList) {
	tmpList.forEach( ( item, i ) => {
		tmpList[i].score = parseInt(100/(this.total));
		tmpList[i].missedScore = 0;
		//复合题 
		if(tmpList[i].questypetemp == 5) {
			// 复合题 score 赋初值
			tmpList[i].subQuestionList.forEach( ( sub, j ) => {
				tmpList[i].subQuestionList[j].score = parseInt(100/(this.total));
			})
			//复合题总分累加 分值
			for(let j = 0; j < tmpList[i].subQuestionList.length-1 > 0; j++) {
				this.totalScore = this.totalScore + parseInt(100/(this.total));
			}
			//复合题和 分数初值
			tmpList[i].eScore = tmpList[i].subQuestionList.length * parseInt(100/(this.total));
		}
		//最后一题加余数
		if(i == tmpList.length-1){
			//复合题 最后一题加余数
			if(tmpList[i].questypetemp == 5) {
				tmpList[i].subQuestionList[tmpList[i].subQuestionList.length-1].score += 100%this.total;
				tmpList[i].eScore += 100%this.total;
				this.totalScore += 100%this.total;
			}else{
				tmpList[i].score += 100%this.total;
			}
		}
		this.totalScore += parseFloat(tmpList[i].score);
	});
},
```

