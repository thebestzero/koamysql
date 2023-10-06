import ShopCart from "@/modules/decorateModel/shopCart";

export type ShopCartRaw = Pick<ShopCart, 'bookisbn'|'bookname'|'bookpicname'|'bookprice'|'userid'|'purcharsenum'>
export type ShopCartRaw_ = Pick<ShopCart, 'shopcartid'|'bookisbn'|'bookname'|'bookpicname'|'bookprice'|'userid'|'purcharsenum'>
