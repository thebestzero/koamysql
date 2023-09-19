import Books from "@/modules/decorateModel/books";

class BooksDao{
    static booksDao:BooksDao = new BooksDao()
    async findBooksByThirdCtgyId(thirdctgyId:number){
        return  await Books.findAll({
            raw:true,
            where:{
                thirdctgyId
            }
        })
    }
}

export default BooksDao.booksDao
