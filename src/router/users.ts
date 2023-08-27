// 用户二级路由
import { Context } from 'koa'
import Router from 'koa-router'
import { success } from '@/common/ResResult'
import UserDao, { UserInfo } from '../modules/userinfo/dao/UserDao'
import {parseInt} from "lodash";

const router = new Router()

router.prefix('/usermodule')

router.get('/findUserinfo/:username', async (ctx: Context) => {
  const { username } = ctx.params
  ctx.body = success(`您好，${username}`)
})

router.post('/addUser', async (ctx) => {
  const userInfo: UserInfo = ctx.request.body
  const dbUserInfo = await UserDao.addUser(userInfo)
  ctx.body = success(dbUserInfo)
})

router.get('/findAllUser', async (ctx) => {
  const dbUserinfo = await UserDao.findAllUser()
  ctx.body = await success(dbUserinfo)
})
// router.get('/findAllUserWithOrm', async (ctx) => {
//   const dbUserinfo = await UserDao.findAllUserWithOrm()
//   ctx.body = await success(dbUserinfo)
// })
router.get('/findByProps', async (ctx) => {
  ctx.body = await success(await UserDao.findByProps())
})
router.get('/findByUsernameAndPsw/:username/:password', async (ctx) => {
  const { username, password } = ctx.params
  ctx.body = await success(
    await UserDao.findByUsernameAndPsw(username, password),
  )
})
router.get('/findByUsernameAndAddress/:username/:address', async (ctx) => {
  const { username, address } = ctx.params
  ctx.body = await success(
    await UserDao.findByUsernameAndAddress(username, address),
  )
})
router.get('/findByLike/:key', async (ctx) => {
  const { key } = ctx.params
  ctx.body = await success(await UserDao.findByLike(key))
})
router.get('/countUserinfo', async (ctx) => {
  ctx.body = await success(await UserDao.countUserinfo())
})
router.get('/findUserWithPager/:pageNo/:pageSize', async (ctx) => {
  let { pageNo, pageSize }: Record<string, any> = ctx.params
  const offset: number = (pageNo - 1) * pageSize
  ctx.body = await success(await UserDao.findUserWithPager(offset,parseInt(pageSize)))
})
module.exports = router
