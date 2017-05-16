'use strict';

require('babel-core/register');
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});

const http = require('http');
const path = require('path');
const express = global.express = require('express');
const app = global.app = express();
const bodyParser = require("body-parser"); // 处理参数  如post请求

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './dist/')));

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// 错误处理中间件
app.use(function(err, req, res, next) {
    console.error('app.use error:  ' + err.message);
    res.status(500).send('Something broke!');
});


const server = http.createServer(app).listen(3000, function(){
    const {address, port} = server.address();
    console.log('Example app listening at http://%s:%s', address, port);
});