import Router from 'koa-router'
import {findSecondCtgyAndThirdCtgyByFirstCtgyDao} from "@/modules/ctgy/dao/ctgyDao";
import { success } from '@/common/ResResult'

const router = new Router()
router.prefix('/ctgyModule')


router.get(
    '/findSecondCtgyAndThirdCtgyByFirstCtgy/:firstctgyid',
    async (ctx) => {
        const { firstctgyid } = ctx.params
        console.log(firstctgyid)
        const res = await findSecondCtgyAndThirdCtgyByFirstCtgyDao(
            parseInt(firstctgyid)
        )

        ctx.body = success(res)
    }
)

module.exports = router
