var express = require('express');
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');
var compression = require('compression');


//端口
var port = 9000;
var app = express();
//浏览器刷新
app.use(history());
//gzip
app.use(compression())
//文件内容
app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}));
//服务
app.listen(port,function(){
	console.log('Server on http://localhost:%s', port);
})