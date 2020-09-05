# koa-debug
返回 Koa 框架的属性用于调试和测试

## 返回格式演示
```
{
    "headers": {
        "content-type": "application/json",
        "user-agent": "PostmanRuntime/7.26.3",
        "accept": "*/*",
        "postman-token": "04f9991a-a013-4848-8bf3-ebfd5d7f8b4b",
        "host": "127.0.0.1:8002",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-length": "16"
    },
    "url": "/school/class?id=12&name=mark",
    "origin": "http://127.0.0.1:8002",
    "href": "http://127.0.0.1:8002/school/class?id=12&name=mark",
    "method": "GET",
    "path": "/school/class",
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
}
```
