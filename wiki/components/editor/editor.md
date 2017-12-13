    * 保持代码整洁优雅，享受编程
    * @author lgzhang(lgzhang08@gmail.com)


## 组件说明

> 基于百度编辑器编写 (http://ueditor.baidu.com/website/umeditor.html)

> 添加自定义表情 添加附件 插入平台资源等功能 

------------


## Attributes
|  参数 | 说明  | 类型  | 可选值  | 默认值  |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| editorUrl  | 编辑器名字  | string |   editor.html reply-editor  | editor.html  |
| uploadPath | 上传地址    | string |  ---                        |  ---- |
| value  | 初始绑定值      | string |  ---                        |  ---- |
| width |  宽度 |  string  |         | 100%                      |
| width |  高度 |  string  |         | 300                     |



------------


## Events
|  参数 | 说明  | 参数  |
| :------------ | :------------ | :------------ |
| input  | 编辑器内容变化  | 编辑器的值 |  


------------

## Methods
无


------------

## 组件示例
<script v-pre type="text/x-template" id="editor">
  <template>
    <div>
      <h1>编辑器-新建</h1>
      <we-editor :editorUrl="editorUrl" :uploadPath="uploadPath" @input="contentChange" height="300"></we-editor>
      <div>编辑器绑定值</div>
      <div>{{content}}</div>
  
      <h1>编辑器-赋值</h1>
      <we-editor :editorUrl="editorUrl" :uploadPath="uploadPath" :value="content" @input="contentChange" height="300"></we-editor>
      <div>编辑器绑定值</div>
      <div>{{content}}</div>
    </div>
  </template>
  <style>
  
  </style>
  <script>
      module.exports = {
      components: {
      },
      data(){
          return {
            editorUrl: window.CloudServer + '/editor/editor.html',
            uploadPath: '',
            content: "<p style='color:red'>赋值啦</p>",
          }
      },
      watch: {
  
      },
      methods: {
        contentChange(content) {
          this.content = content
        }
      },
      mounted() {
  
      }
    }
  </script>
</script>

<vuep template="#editor"></vuep>

