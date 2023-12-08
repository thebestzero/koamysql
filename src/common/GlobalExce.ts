/*
 * 全局异常处理
 * */
import Koa, { Context } from 'koa'
import {fail} from './ResResult'
import {verifyToken} from "@/controller/BaseController";

const globalException = async (ctx: Context, next: Koa.Next) => {
 await next().catch((err) => {
      if (err.status === 401){
        ctx.body = fail('invalid token')
      }else {
        ctx.body = fail('服务器错误'+err)
      }
 })
}
// const globalException = async (ctx: Context, next: Koa.Next) => {
//   try {
//     if (ctx.request.originalUrl.indexOf('login') === -1) {
//       const token = ctx.req.headers.authorization!.split(' ')[1]
//       verifyToken(token)
//     }
//     await next()
//   } catch (e) {
//     const eres = e as { message: string,name:string }
//     switch (eres.name){
//       case 'JsonWebTokenError':
//         ctx.body = fail('invalid token')
//             break;
//       case 'TokenExpiredError':
//         ctx.body = fail(`expired token`)
//             break
//       default:
//         ctx.body = fail(`全局异常处理中间件捕获到异常：${eres.message}`)
//     }
//   }
// }

export default globalException
