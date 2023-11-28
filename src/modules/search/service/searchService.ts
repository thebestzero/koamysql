import searchDao from "@/modules/search/dao/searchDao";
import {combine} from "@/modules/commontypes";
class SearchService {
    static searchService: SearchService = new SearchService()
    async addOrUpdateHistoryKeyword(historyKeyword:string){
        const dbHistoryKeyword = await searchDao.searchHistoryKeywords(historyKeyword)
        if (dbHistoryKeyword){
            console.log('更新',dbHistoryKeyword);
            const result:[{affectedRows:number},any] = await searchDao.updateHistoryKeywordCount(historyKeyword)
            return result[0].affectedRows
        }else {
            console.log('保存',dbHistoryKeyword);
            const result:[number,number] = await searchDao.saveHistoryKeyword(historyKeyword)
            console.log(result)
            return result[0]
        }
    }
    async searchKeywords(key:string){
        return await searchDao.searchKeywords(key)
    }
    async searchDecovery(){
        return await searchDao.searchDecovery()
    }
}

export default SearchService.searchService
