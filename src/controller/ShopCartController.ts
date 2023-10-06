import {Context} from "koa";
import {get,post} from "@/decorator/reqmethoddecorator";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import ShopCartService from "@/modules/shopcart/service/shopCartService";
@Controller('/shopCartmodule')
class BooksController{
    @get("/findCurUserShopCartList/:userid")
    async findSecThirdCtgys(ctx:Context){
        const {userid} = ctx.params;
        const res = await ShopCartService.findCurUserShopCartList(parseInt(userid))
        ctx.body = success(res)
    }
    @get("/delBookShopCart/:shopcartid")
    async delBookShopCart(ctx:Context){
        const {shopcartid} = ctx.params;
        const res = await ShopCartService.delBookShopCart(parseInt(shopcartid))
        ctx.body = success(res)
    }
    @post("/addBookToShopCart")
    async addBookToShopCart(ctx:Context){
        const shopCartRaw = ctx.request.body
        const res = await ShopCartService.addBookToShopCart(shopCartRaw)
        ctx.body = success(res)
    }
    @post("/appOrSubtrBookFrmShopCart")
    async appOrSubtrBookFrmShopCart(ctx:Context){
        const shopCart = ctx.request.body
        console.log(shopCart)
        const res = await ShopCartService.appOrSubtrBookFrmShopCart(shopCart)
        ctx.body = success(res)
    }


}




