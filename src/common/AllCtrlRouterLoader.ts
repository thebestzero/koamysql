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
        // 保存根路由
        this.storeRootRouterToCtx()
        // 加载中间件
        this.loadMiddleAware()
        // 加载控制器路由
        this.loadAllCtrlRouterWrapper();
        // 监听
        this.listen()
    }
    loadMiddleAware(){
        this.app.use(globalException)
        this.app.use(json())
        this.app.use(body())
    }
    storeRootRouterToCtx() {
        const rootRouter = new Router()
        rootRouter.prefix('/dang') //为所有路由访问添加路由前缀/dang,来作为一级路由
        this.app.context.rootRouter = rootRouter
        this.app.use(rootRouter.routes())
    }
    isCtrlFile(file:string){
        const fileName: string = file.substring(
            file.lastIndexOf("\\") + 1,
            file.lastIndexOf(".")
        );
        const extensionName: string = file.substring(
            file.lastIndexOf("."),
            file.length
        );
        return fileName.indexOf("Controller") !== -1 && extensionName === ".ts";
    }
    loadAllCtrlRouterWrapper(){
        const allFullFilePaths = this.getAbsoluteFilePaths()
        this.loadAllRouter(allFullFilePaths)
    }
    getAbsoluteFilePaths(){
        const dir = path.join(process.cwd(),'/src/controller')
        const allFiles = fs.readdirSync(dir)
        const allFullFilePaths: string[] = [];
        allFiles.forEach((file)=>{
            if (!this.isCtrlFile(file)) return;
            const fullFilePath = dir + '\\' + file
            allFullFilePaths.push(fullFilePath)
        })
        return allFullFilePaths
    }
    loadAllRouter(allFullFilePaths:string[]){
        console.log(allFullFilePaths)
        for (let fullFilePath of allFullFilePaths) {
            require(fullFilePath);
        }
    }

    listen() {
        this.app.listen(3002)
        console.log('server running on port 3002')
    }
}

export default AllRouterLoader.allRouterLoader
