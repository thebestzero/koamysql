import Router from 'koa-router'
import CtgyDao from "@/modules/ctgy/dao/ctgyDao";
import { success } from '@/common/ResResult'

const router = new Router()
router.prefix('/ctgyModule')


router.get(
    '/findSecThrdCtgys/:firstctgyid',
    async (ctx) => {
        const { firstctgyid } = ctx.params
        console.log(firstctgyid)
        const res = await CtgyDao.findSecThrdCtgys(
            parseInt(firstctgyid)
        )
        ctx.body = success(res)
    }
)

module.exports = router
