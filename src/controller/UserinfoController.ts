import {Context} from "koa";
import {get,post} from "@/decorator/reqmethoddecorator";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import UserService from "@/modules/userinfo/service/UserService";
@Controller('/usermodule')
class UserinfoController {
    @post('/login')
    async login(ctx:Context){
        const {username,password} = ctx.request.body
        ctx.body = success(await UserService.login(username,password))
    }
}



