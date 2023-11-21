import {Context} from "koa";
import {get,post} from "@/decorator/reqmethoddecorator";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import SearchService from "@/modules/search/service/searchService";
import CtgyDao from "@/modules/ctgy/dao/ctgyDao";
import searchService from "@/modules/search/service/searchService";
@Controller('/searchmodule')
class CtgyController{
    @post('/addOrUpdateHistoryKeyword')
    async findFirstCtgyList(ctx:Context){
        const {historykeyword} = ctx.request.body
        ctx.body = success(await SearchService.addOrUpdateHistoryKeyword(historykeyword))
    }
    @get("/searchKeywords/:key")
    async findSecThirdCtgys(ctx:Context){
        const {key} = ctx.params;
        ctx.body = success(await searchService.searchKeywords(key))
    }
}

/*
    console.log(Object.getOwnPropertyNames(CtgyController.prototype))// [ 'constructor', 'findSecThirdCtgys' ]
    console.log(Object.keys(CtgyController.prototype),Object.keys(CtgyController.prototype).length)// [] 0
    // 分下下为什么 第一个可以得到class类上的方法 而第二个确是空数组 class 类内部的方法默认都是不可枚举的
*/



