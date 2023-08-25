import Koa from 'koa'
import body from "koa-body";// 支持post请求依赖
import json from 'koa-json'// 支持响应数据对象 转 json
import Router from "koa-router";
const app = new Koa()
const router = new Router()
import allRouterLoader from './common/AllRouterLoader'
import Dbconfig from "./config/Dbconfig";
allRouterLoader.init(app) //动态加载路由


// localhost:3002/dang/usermodule/findUserinfo/zhangsan
/*
* routes() 方法将注册 userRouter 对象中定义的路由处理程序，这些处理程序定义了与用户相关的不同路由和请求方法的处理逻辑。通过调用 routes() 方法，这些路由处理程序将被添加到应用程序的路由中。
* allowedMethods() 方法用于处理路由中未定义的请求方法。当应用程序收到一个未被定义的请求方法时，allowedMethods() 方法会根据定义的规则进行处理。默认情况下，它会返回 405 Method Not Allowed 状态码，并在响应头中包含允许的请求方法。这样，客户端就能够知道哪些方法是允许的。
* 综上所述，router.use(userRouter.routes(),userRouter.allowedMethods()) 的作用是将 userRouter 对象中定义的路由处理程序注册到应用程序的路由中，并处理未定义的请求方法。这样，用户相关的路由就能够正确地处理不同的请求方法，并返回适当的响应。
* */
// router.use(userRouter.routes(),userRouter.allowedMethods())

// // 加载路由到全局路由上
// app.use(router.routes())
// app.listen(3002)
// console.log('3002.。。')