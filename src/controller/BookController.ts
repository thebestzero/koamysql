import {Context} from "koa";
import {get} from "@/decorator/reqmethoddecorator";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import booksDao from '@/modules/books/dao/booksDao'
@Controller('/booksmodule')
class BooksController{

    @get("/findBooksByThirdCtgyId/:thirdctgyId/:sortField/:ascOrDesc")
    async findSecThirdCtgys(ctx:Context){
        const {thirdctgyId,sortField,ascOrDesc} = ctx.params;
        const res = await booksDao.findBooksByThirdCtgyId(
            parseInt(thirdctgyId),
            sortField,
            ascOrDesc
        )
        ctx.body = success(res)
    }
    @get("/findBooksBySecCtgyId/:secondctgyId/:sortField/:ascOrDesc")
    async findBooksBySecCtgyId(ctx:Context){
        const {secondctgyId,sortField,ascOrDesc} = ctx.params;
        const res = await booksDao.findBooksBySecCtgyId(
            parseInt(secondctgyId),
            sortField,
            ascOrDesc
        )
        ctx.body = success(res)
    }
    @get("/findBookByISBN/:isbn")
    async findBookByISBN(ctx:Context){
        const {isbn} = ctx.params
        ctx.body = success(await booksDao.findBookByISBN(isbn))
    }
}




