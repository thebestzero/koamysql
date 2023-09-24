import Books from "@/modules/decorateModel/books";

class BooksDao{
    static booksDao:BooksDao = new BooksDao()
    async findBooksByThirdCtgyId(thirdctgyId:number,sortField:string = 'originalprice',ascOrDesc:string = 'asc'){
        return  await Books.findAll({
            order:[[sortField,ascOrDesc]],
            raw:true,
            where:{
                thirdctgyId
            }
        })
    }
    async findBooksBySecCtgyId(secondctgyId:number,sortField:string = 'originalprice',ascOrDesc:string = 'asc'){
        return  await Books.findAll({
            order:[[sortField,ascOrDesc]],
            raw:true,
            where:{
                secondctgyId
            }
        })
    }
}

export default BooksDao.booksDao
