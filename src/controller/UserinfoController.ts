import {Context} from "koa";
import {get,post} from "@/decorator/reqmethoddecorator";
import {success,fail} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import UserService from "@/modules/userinfo/service/UserService";
@Controller('/usermodule')
class UserinfoController {
    @post('/login')
    async login(ctx:Context){
        const {username,password} = ctx.request.body
        const userInfo = await UserService.login(username,password)
        if (userInfo){
            ctx.body = success(userInfo)
        }else {
            ctx.body = fail('用户名或密码错误！！！')
        }
    }
}



