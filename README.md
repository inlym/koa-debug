# koa-debug
返回 Koa 框架的属性用于调试和测试

## 返回格式演示
```
{
    "request": {
        "headers": {
            "content-type": "application/json",
            "user-agent": "PostmanRuntime/7.26.3",
            "accept": "*/*",
            "postman-token": "5d5fa3b0-25ad-436e-84cf-5316b7515168",
            "host": "127.0.0.1:8002",
            "accept-encoding": "gzip, deflate, br",
            "connection": "keep-alive",
            "content-length": "16"
        },
        "url": "/school/class?id=12&name=mark",
        "origin": "http://127.0.0.1:8002",
        "href": "http://127.0.0.1:8002/school/class?id=12&name=mark",
        "method": "POST",
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
}```
