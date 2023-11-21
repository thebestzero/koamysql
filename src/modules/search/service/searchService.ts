import searchDao from "@/modules/search/dao/searchDao";
import {combine} from "@/modules/commontypes";
class SearchService {
    static searchService: SearchService = new SearchService()
    async addOrUpdateHistoryKeyword(historyKeyword:string){
        const dbHistoryKeyword = await searchDao.searchHistoryKeywords(historyKeyword)
        if (dbHistoryKeyword){
            const result:[{affectedRows:number},any] = await searchDao.updateHistoryKeywordCount(historyKeyword)
            return result[0].affectedRows
        }else {
            const result:[number,number] = await searchDao.saveHistoryKeyword(historyKeyword)
            console.log(result)
            return result[0]
        }
    }
    async searchKeywords(key:string){
        return await searchDao.searchKeywords(key)
    }
}

export default SearchService.searchService
