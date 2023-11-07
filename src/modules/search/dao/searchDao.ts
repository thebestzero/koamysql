import Keyword from "@/modules/decorateModel/keyword";
import {sequelize} from "@/modules/BaseDao";
import {Op} from "sequelize";

class SearchDao {
    static searchDao:SearchDao = new SearchDao()
    // 根据输入的关键字查询搜索关键字列表
    async searchKeywords(keyword:string){
        return  await Keyword.findAll({
            raw:true,
            where:{
                keyword:{
                    [Op.like]:`%${keyword}%`
                }
            }
        })
    }
    // 查询是否存在该历史关键字
    async searchHistoryKeywords(historykeyword:string){
        return  await Keyword.findOne({
            raw:true,
            where:{
                keyword:{
                    [Op.like]:`%${historykeyword}%`
                }
            }
        })
    }
    async saveHistoryKeyword(historykeyword:string):Promise<[any,any]>{
        const sql = `insert into historykeyword(historykeyword,clickcount) values('${historykeyword}',1)`
        return sequelize.query(sql)
    }
    async updateHistoryKeywordCount(historykeyword:string):Promise<[any,any]>{
        const sql = `update historykeyword set clickcount=clickcount+1 where historykeyword = '${historykeyword}'`
        return sequelize.query(sql)
    }
}

export default SearchDao.searchDao
