import ShopCart from "@/modules/decorateModel/shopCart";
import {ShopCartRaw,ShopCartRaw_} from "@/modules/shopcart/raw/type";
import {sequelize} from "@/modules/BaseDao";

class ShopCartDao {
      static shopCartDao:ShopCartDao = new ShopCartDao()
      async findCurUserShopCartList(userid:number){
         return  await ShopCart.findAll({
              raw:true,
              where:{
                  userid
              }
          })
        }
      async addBookToShopCart(shopCartRaw:ShopCartRaw):Promise<[any,any]>{
          console.log(shopCartRaw)
          const {bookisbn,bookname,bookpicname,bookprice,userid,purcharsenum} = shopCartRaw
          const sql = `insert into shopcart(bookisbn,bookname,bookpicname,bookprice,userid,purcharsenum) values('${bookisbn}','${bookname}','${bookpicname}',${bookprice},${userid},${purcharsenum})`
          return sequelize.query(sql)
      }
      async appOrSubtrBookFrmShopCart(shopCart:ShopCartRaw_):Promise<[any,any]>{
          const sql = `UPDATE shopcart SET purcharsenum=${shopCart.purcharsenum} WHERE shopcartid=${shopCart.shopcartid}`
          return sequelize.query(sql)
      }
      async delBookShopCart(shopcartid:number){
          return await ShopCart.destroy({
              where:{
                  shopcartid
              }
          })
      }
}

export default ShopCartDao.shopCartDao
