# vuejs通用
- 包括 vuejs 通用指令 过滤器
##1.文件大小kb转化为M（应用商城）
###size-change组件，数值除以1024，保留一位小数
		el.innerHTML =  fomatFloat(value.value/1024, 1)
		function fomatFloat(src,pos){ 
			return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos); 
		}
##2.学期处理（错题统计手机端）
		window.doSemester(year)//传入入学年份
		返回semesterlist学期列表，入学3年之内的学期列表，入学不满3年不显示
		09-01至02-29（上学期）；03-01至08-31（下学期）
##3.点击弹框之外的其他区域，将弹框隐藏
		onclick-outside组件
   参考
    https://github.com/egoist/onclick-outside
##4.watch方法如果data是数组或对象，其中的属性改变，不会被触发
   可以使用ref;
   html
        <app-item :single-data="appItemList" ref="appitem"></app-item>
   js
        this.$refs.appitem.item = []
		this.$refs.appitem.item = this.appItemList	//先置空，再重新赋值
   子组件
        watch: {
			singleData:function(data){
		    		this.item = data
			   }
			} 