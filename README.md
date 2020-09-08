# koa-debug
获取 Koa 框架的属性用于调试和测试

## 安装
```
npm i koa-debug
```

## 使用
按照以下方式放在所有中间件之前：
```
'use strict'

const Koa = require('koa')
const debug = require('koa-debug')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 放在其他中间件之前
app.use(debug())

app.use(bodyParser())
router.post('/path/to', ctx => {
    ctx.body = 'hello world'
})
app.use(router.routes())
app.listen(8002)
```

## 配置参数
你可以按照以下方式进行配置：
```
app.use(debug({
    disabled:false,
    mode:'response'
}))
```

|   参数   |  类型   |  默认值  |                             说明                             |
| :------: | :-----: | :------: | :----------------------------------------------------------: |
| disabled | boolean |  false   |                         是否关闭功能                         |
|   mode   | string  | response | 调试模式：'response' => 直接作为响应返回，'console' => 在控制台打印 |






## 返回格式演示
```
{
    "request": {
        "headers": {
            "content-type": "application/json",
            "user-agent": "PostmanRuntime/7.26.3",
            "accept": "*/*",
            "host": "127.0.0.1:8002",
            "accept-encoding": "gzip, deflate, br",
            "connection": "keep-alive",
            "content-length": "16"
        },
        "url": "/path/to?id=12&name=mark",
        "origin": "http://127.0.0.1:8002",
        "href": "http://127.0.0.1:8002/path/to?id=12&name=mark",
        "method": "POST",
        "path": "/path/to",
        "query": {
            "id": "12",
            "name": "mark"
        },
        "querystring": "id=12&name=mark",
        "search": "?id=12&name=mark",
        "host": "127.0.0.1:8002",
        "hostname": "127.0.0.1",
        "protocol": "http",
        "secure": false,
        "ips": [],
        "ip": "::ffff:127.0.0.1",
        "subdomains": [],
        "body": {
            "name": "inlym"
        },
        "rawBody": "{\"name\":\"inlym\"}"
    },
    "response": {
        "headers": {
            "content-type": "text/plain; charset=utf-8",
            "content-length": "5"
        },
        "status": 200,
        "message": "OK",
        "body": "hello"
    }
}
```
