export const secThirdCtgys = [
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 1,
    thirdname: '图画故事',
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 2,
    thirdname: '认知',
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 3,
    thirdname: '益智游戏',
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 4,
    thirdname: '纸板书',
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 5,
    thirdname: '艺术课堂',
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 6,
    thirdname: '入园准备',
    secctgyId: 1,
  },
  {
    secondctgyId: 2,
    secctgyname: '3-6岁',
    firstctgyId: 1,
    thirdctgyId: 7,
    thirdname: '绘本',
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: '3-6岁',
    firstctgyId: 1,
    thirdctgyId: 8,
    thirdname: '科普百科',
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: '3-6岁',
    firstctgyId: 1,
    thirdctgyId: 9,
    thirdname: '少儿英语',
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: '3-6岁',
    firstctgyId: 1,
    thirdctgyId: 10,
    thirdname: '乐高学习',
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: '3-6岁',
    firstctgyId: 1,
    thirdctgyId: 11,
    thirdname: '入学准备',
    secctgyId: 2,
  },
  {
    secondctgyId: 3,
    secctgyname: '7-10岁',
    firstctgyId: 1,
    thirdctgyId: 12,
    thirdname: '文学',
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: '7-10岁',
    firstctgyId: 1,
    thirdctgyId: 13,
    thirdname: '科普百科',
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: '7-10岁',
    firstctgyId: 1,
    thirdctgyId: 14,
    thirdname: '卡通动漫',
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: '7-10岁',
    firstctgyId: 1,
    thirdctgyId: 15,
    thirdname: '童话',
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: '7-10岁',
    firstctgyId: 1,
    thirdctgyId: 16,
    thirdname: '少儿英语',
    secctgyId: 3,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 17,
    thirdname: '励志',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 18,
    thirdname: '地理',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 19,
    thirdname: '政治',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 20,
    thirdname: '趣味幽默',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 21,
    thirdname: '少儿英语',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 22,
    thirdname: '益智游戏',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 23,
    thirdname: '艺术课堂',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 24,
    thirdname: '游戏/手工',
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: '11-14岁',
    firstctgyId: 1,
    thirdctgyId: 25,
    thirdname: '绘画',
    secctgyId: 4,
  },
]

// 第一步获取数组元素类型
export type EleofArr<T> = T extends Array<infer E> ? E : never

type SecThirdCtgy = EleofArr<typeof secThirdCtgys> // 数组元素类型
type K = keyof EleofArr<typeof secThirdCtgys> // 数组元素键名
type Keys = K[]
let keys: Keys = ['secctgyname', 'thirdname']

export type ItemType<T extends object[]> = {
  [K in keyof EleofArr<T>]: EleofArr<T>[K]
}
// 第二步获取指定key组成的数组
function getSubltemFrmArr<T extends ItemType<T>[], K extends keyof EleofArr<T>>(
  arr: T,
  ...keys: K[]
): Pick<EleofArr<T>, K>[] {
  return arr.map((item) => {
    return keys.reduce((pre, key, index) => {
      return { ...pre, [key]: item[key] }
    }, {}) as Pick<EleofArr<T>, K>
  })
}
// 二级分类数组
export const OneRes = getSubltemFrmArr(secThirdCtgys, "secondctgyId","secctgyname")
