// 用户二级路由
import { Context } from 'koa'
import Router from 'koa-router'
import { success } from '../common/ResResult'
import UserDaoDefine, { UserInfo } from '../db/dao/UserDaoDefine'
import {parseInt} from "lodash";

const router = new Router()

router.prefix('/usermodule')

router.get('/findUserinfo/:username', async (ctx: Context) => {
  const { username } = ctx.params
  ctx.body = success(`您好，${username}`)
})

router.post('/addUser', async (ctx) => {
  const userInfo: UserInfo = ctx.request.body
  const dbUserInfo = await UserDaoDefine.addUser(userInfo)
  ctx.body = success(dbUserInfo)
})

router.get('/findAllUser', async (ctx) => {
  const dbUserinfo = await UserDaoDefine.findAllUser()
  ctx.body = await success(dbUserinfo)
})

router.get('/findByProps', async (ctx) => {
  ctx.body = await success(await UserDaoDefine.findByProps())
})
router.get('/findByUsernameAndPsw/:username/:password', async (ctx) => {
  const { username, password } = ctx.params
  ctx.body = await success(
    await UserDaoDefine.findByUsernameAndPsw(username, password),
  )
})
router.get('/findByUsernameAndAddress/:username/:address', async (ctx) => {
  const { username, address } = ctx.params
  ctx.body = await success(
    await UserDaoDefine.findByUsernameAndAddress(username, address),
  )
})
router.get('/findByLike/:key', async (ctx) => {
  const { key } = ctx.params
  ctx.body = await success(await UserDaoDefine.findByLike(key))
})
router.get('/countUserinfo', async (ctx) => {
  ctx.body = await success(await UserDaoDefine.countUserinfo())
})
router.get('/findUserWithPager/:pageNo/:pageSize', async (ctx) => {
  let { pageNo, pageSize }: Record<string, any> = ctx.params
  const offset: number = (pageNo - 1) * pageSize
  ctx.body = await success(await UserDaoDefine.findUserWithPager(offset,parseInt(pageSize)))
})
module.exports = router
