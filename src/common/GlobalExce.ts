/*
 * 全局异常处理
 * */
import Koa, { Context } from 'koa'
import {fail} from './ResResult'
const globalException = async (ctx: Context, next: Koa.Next) => {
  try {
    await next()
  } catch (e) {
    const eres = e as { message: string }
    ctx.body = fail(`全局异常处理中间件捕获到异常：${eres.message}`)
  }
}

export default globalException
