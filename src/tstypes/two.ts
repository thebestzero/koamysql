import { secThirdCtgys, EleofArr, ItemType,OneRes } from '@/tstypes/index'

// getOneItemValuesFrmArr
// getNoReptValsItem
// getNoReptItem

function getOneItemValuesFrmArr<
  T extends ItemType<T>[],
  K extends keyof EleofArr<T>,
  E = EleofArr<T>,
>(arr: T, key: K) {
  return arr.map(({ [key]: v }: E) => {
    return v
  })
}

function getNoReptValsItem(arr: any[]) {
  const data: any[] = []
  arr.forEach((item) => !data.includes(item) && data.push(item))
  return data
}

function getNoReptItem<T extends ItemType<T>[], K extends keyof EleofArr<T>>(
  arr: T,
  key: K,
) {
  const oneItemValuesFrmArr = getOneItemValuesFrmArr(arr, key)
  const noReptValsItem = getNoReptValsItem(oneItemValuesFrmArr)
  const data: any[] = []
  arr.forEach((item) => {
    if (noReptValsItem.includes(item[key])) {
      noReptValsItem.splice(noReptValsItem.indexOf(item[key]),1)
      data.push(item)
    }
  })
  return data
}

// 去重二级分类数组
const res = getNoReptItem(OneRes,"secondctgyId")
