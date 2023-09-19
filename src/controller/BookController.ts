import {Context} from "koa";
import {get} from "@/decorator/reqmethoddecorator";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import booksDao from '@/modules/books/dao/booksDao'
@Controller('/booksmodule')
class BooksController{

    @get("/findBooksByThirdCtgyId/:thirdctgyId")
    async findSecThirdCtgys(ctx:Context){
        const {thirdctgyId} = ctx.params;
        const res = await booksDao.findBooksByThirdCtgyId(
            parseInt(thirdctgyId)
        )
        ctx.body = success(res)
    }
}




