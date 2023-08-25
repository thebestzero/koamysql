import path from 'path'
import fs from 'fs'
import Koa from 'koa'
import Router from 'koa-router'
import body from 'koa-body'
import json from 'koa-json'
import globalException from "./GlobalExce";
class AllRouterLoader {
  app!: Koa
  static allRouterLoader: AllRouterLoader = new AllRouterLoader()

  // 初始化方法
  init(app: Koa) {
    this.app = app
    // 加载路由
    const rootRouter = this.loadAllRouterWrapper()
    this.app.use(globalException)
    this.app.use(rootRouter.routes())
    // 监听
    this.listen()
  }
  // 1、加载所有路由文件绝对路径数组
  getAbsoluteFilePaths() {
    const cwd = process.cwd() //返回 Node.js 进程的当前工作目录
    const dir = path.join(cwd, 'src/router') //路由目录
    const allFiles = fs.readdirSync(dir) //路由目录数组，这个函数用于读取指定目录下的文件和子目录，并返回一个包含目录内容的数组
    const allFullFilePaths: string[] = [] //所有路由文件绝对路径数组
    allFiles.forEach((file) => {
      const fileFullPath = dir + '\\' + file
      allFullFilePaths.push(fileFullPath)
    })
    return allFullFilePaths
  }
  // 2、加载所有一级路由到二级路由
  loadAllRouterWrapper() {
    // 获取一级路由
    const rootRouter = this.getRootRouter()
    // 调用获取绝对路径数组方法
    const allFullFilePaths = this.getAbsoluteFilePaths()
    // 调用加载所有一级路由到二级路由方法
    this.loadAllRouter(allFullFilePaths, rootRouter)
    return rootRouter
  }
  //一级路由
  getRootRouter() {
    const rootRouter = new Router()
    rootRouter.prefix('/dang') //为所有路由访问添加路由前缀/dang,来作为一级路由
    this.app.use(json())
    this.app.use(body())
    return rootRouter
  }
  //自定义守卫
  isRouter(data: any): data is Router {
    return data instanceof Router
  }
  loadAllRouter(allFullFilePaths: string[], rootRouter: Router) {
    allFullFilePaths.forEach((path) => {
      const module = require(path)
      if (this.isRouter(module)) {
        rootRouter.use(module.routes(), module.allowedMethods())
      }
    })
  }
  listen() {
    this.app.listen(3002)
    console.log('server running on port 3002')
  }
}

export default AllRouterLoader.allRouterLoader
