---
title: Netty网关：中间件设计和实践
---

作者：小傅哥
<br/>博客：[https://bugstack.cn](https://bugstack.cn)

>沉淀、分享、成长，让自己和他人都能有所收获！

| 序号 | 系统               | 描述                                                         |
| ---- | ------------------ | ------------------------------------------------------------ |
| 1    | api-gateway-core   | 网关核心系统：用于网络通信转换处理，承接http请求，调用RPC服务 |
| 2    | api-gateway-admin  | 网关管理系统：用于网关接口后台管理，注册下线停用控制         |
| 3    | api-gateway-sdk    | 网关注册组件：用于注解方式采集接口，发送消息注册接口         |
| 4    | api-gateway-center | 网关注册中心：提供网关注册中心服务，登记网关接口信息         |
| 5    | api-gateway-test-provider | 网关测试工程：提供RPC接口        |
| 6    | api-gateway-test-consumer | 网关测试工程：消费RPC接口         |

- 编写中
