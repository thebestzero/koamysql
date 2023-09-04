type fnType1 = new (...args:any)=>any
interface fnType2{
    new(...args:any):any
}
// 获取数字元素类型
export type EleOfArr<T> = T extends Array<infer E> ? E : never
export type ItemType<T> = {
    [K in keyof EleOfArr<T>]:EleOfArr<T>[K]
}
//  获取指定key组成的数组
export function getSubItemsFrmArr<T extends ItemType<T>[],K extends keyof EleOfArr<T>>(arr:T,...keys:K[]):Pick<EleOfArr<T>, K>[]{
    return arr.map((item)=>{
        return keys.reduce((pre,key)=>{
            return {...pre,[key]:item[key]}
        },{}) as Pick<EleOfArr<T>, K>
    })
}
// 获取数组对象单个属性值组成的数组
function getOneItemValuesFrmArr<T extends ItemType<T>[],K extends keyof EleOfArr<T>,E=EleOfArr<T>>
(arr:T,key:K){
    return arr.map(({[key]:v}:E)=> v)
}
// 上一步数组去重
function getNoReptValsItem(arr:any[]) {
    const data:any[] = []
    arr.forEach((item) => !data.includes(item) && data.push(item))
    return data
}
// 对象去重
export function getNoReptItem<T extends ItemType<T>[],K extends keyof EleOfArr<T>>
(arr:T,key:K):ItemType<T>[] {
    const data:any[] = []
    const oneItemValues = getOneItemValuesFrmArr(arr,key)
    const noReptOneItemValues = getNoReptValsItem(oneItemValues)
    arr.forEach((item)=>{
        if (noReptOneItemValues.includes(item[key])){
            noReptOneItemValues.splice(noReptOneItemValues.indexOf(item[key]),1)
            data.push(item)
        }
    })
    return data
}

// 联合类型参数变交叉类型 infer 参数变交叉 结果变 联合
type UnionToIntersection<U> =  (U extends any? (args:U)=>void:never) extends (args:infer I)=>void ? I :never

// 合并对象
export function combine<T extends object[]>(...args:T):UnionToIntersection<T>
export function combine<T extends object[]>(...args:T){
    return args.reduce((pre,cur)=>{
        return {...pre,...cur}
    },{})
}
// 批量修改数组对象
export function combineRelativeCtgy<T extends ItemType<T>[]>(
    arr:T, realtiveKey: string,
    realtiveValues: any
) {
    return arr.map((item)=>{
        return combine(item,{[realtiveKey]:realtiveValues})
    })
}
