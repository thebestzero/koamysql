import {Context} from "koa";
import {get} from "@/decorator/reqmethoddecorator";
import CtgyDao from "@/modules/ctgy/dao/ctgyDao";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import CtgyService from "@/modules/ctgy/service/ctgyService";

@Controller('/ctgymodule')
class CtgyController{
    @get('/findFirstCtgyList')
    async findFirstCtgyList(ctx:Context){
        ctx.body = success(await CtgyService.findFirstCtgyList())
    }
    @get("/findSecThrdCtgys/:firstctgyid")
    async findSecThirdCtgys(ctx:Context){
        const {firstctgyid} = ctx.params;
        const res = await CtgyDao.findSecThrdCtgys(
            parseInt(firstctgyid)
        )
        ctx.body = success(res)
    }
}

/*
    console.log(Object.getOwnPropertyNames(CtgyController.prototype))// [ 'constructor', 'findSecThirdCtgys' ]
    console.log(Object.keys(CtgyController.prototype),Object.keys(CtgyController.prototype).length)// [] 0
    // 分下下为什么 第一个可以得到class类上的方法 而第二个确是空数组 class 类内部的方法默认都是不可枚举的
*/



