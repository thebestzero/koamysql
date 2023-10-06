import ShopCartDao from "@/modules/shopcart/dao/shopCartDao";
import {ShopCartRaw,ShopCartRaw_} from "@/modules/shopcart/raw/type";
import {combine} from "@/modules/commontypes";
class ShopCartService {
    static shopCartService: ShopCartService = new ShopCartService()
    async findCurUserShopCartList(userid:number){
        return  await ShopCartDao.findCurUserShopCartList(userid)
    }
    async addBookToShopCart(shopCartRaw:ShopCartRaw){
        const res = await ShopCartDao.addBookToShopCart(shopCartRaw)
        const shopcartid = res[0]
        return combine({shopcartid},shopCartRaw)
    }
    async appOrSubtrBookFrmShopCart(shopCart:ShopCartRaw_){
        await ShopCartDao.appOrSubtrBookFrmShopCart(shopCart)
        return shopCart
    }
    async delBookShopCart(shopcartid:number){
        return await ShopCartDao.delBookShopCart(shopcartid)
    }
}

export default ShopCartService.shopCartService
