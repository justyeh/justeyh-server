var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static'))); //设置静态文件目录

//设置端口
var port = process.env.PORT || 8080;

//设置路由
var index = require('./routes/index');
var api = require('./routes/api');

app.use('/', index);//首页
app.use('/api', api);//api请求

//监听端口
app.listen(port);

console.log("服务启动")