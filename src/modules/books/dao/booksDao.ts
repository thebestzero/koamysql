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
    async findBookByISBN(isbn:string){
        return await Books.findOne({
            raw:true,
            where:{
                isbn
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
