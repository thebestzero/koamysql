export class Hashtable {
    table:any[] = []
    put(key:string,value:string){
        const hashCode = this.hash(key)
        this.table[hashCode & 15] = value
    }
    get (key:string){
        const hashCode = this.hasCode(key)
        return this.table[hashCode]
    }
    hash(key:string){
        const hash =this.hasCode(key)
        return hash ^ (hash >>> 16)
    }
    /*
    * 把字符串key转换成一个数字，便于充当数组的索引
    * */
    hasCode(key:string){
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = hash * 31 + key.charCodeAt(i)
        }
        // return hash % 16 效率低
        return hash & 16 // 解决效率低性能问题
    }
}
