import { secThirdCtgys, EleofArr, ItemType, OneRes } from '@/tstypes/index'

type T = [
  { secondctgyId: number; secctgyname: string },
  { thirdname: string; secctgyId: number; thirdctgyId: number },
]

type TNumber = T[number]

// 联合类型函数
type UnionToFn<T> = T extends any ? (args: T) => void : never
// 联合类型变交叉类型
type UnionToIntersection<T> = (
  T extends any ? (args: T) => void : never
) extends (args: infer I) => void
  ? I
  : never

function combine<T extends object[]>(...args: T): UnionToIntersection<T>
function combine<T extends object[]>(...t: T) {
  return t.reduce((pre, cur) => {
    return { ...pre, ...cur }
  }, {})
}

function combineRelativeCtgy<T extends ItemType<T>[]>(
  arr: T,
  realtiveKey: string,
  realtiveValues: any,
) {
    return arr.map((item) => {
        return combine(item,{[realtiveKey]:realtiveValues})
    })
}

// 1.获取二级分类id和名称，一级分类id数组
// 2.二级数组去重
// 3.获取三级分类数组
// 4.定义结果数组类型
// 5.获取结果数组元素类型
// 6.合并convert

