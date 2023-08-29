/*
 * 1.获取二级分类id和名称，一级分类id数组
 * 2.二级数组去重
 * 3.获取三级分类数组
 * 4.定义结果数组类型
 * 5.获取结果数组元素类型
 * 6.合并convert
 * */
import {combine, combineRelativeCtgy, EleofArr, getNoReptItem, getSubltemFrmArr} from "@/modules/commontypes";

type SecThrCtgyList = {
  secondctgyId: number;
  secctgyname: string;
  firstctgyId: number;
  thirdctgyId: number;
  thirdname: string;
  secctgyId: number;
}[];

export function convert(secThrCtgyList:SecThrCtgyList) {
    const secCtgyList = getSubltemFrmArr(secThrCtgyList,'secondctgyId','secctgyname','firstctgyId')
    // 二级数组
    const noReptSecCtgyList = getNoReptItem(secCtgyList,'secondctgyId')
    // 三级数组
    const thrdCtgyList = getSubltemFrmArr(secThrCtgyList,'thirdctgyId','thirdname','secctgyId')
    const relatvieSecThrCtgyLst = combineRelativeCtgy(noReptSecCtgyList,'thirdctgys',[])
    // 结果数组
    const lastSecThrCtgyList: typeof relatvieSecThrCtgyLst= []
    // 结果数组元素类型
    type LastSecThrCtgy= EleofArr<typeof relatvieSecThrCtgyLst>
    // 批量添加
    noReptSecCtgyList.forEach((noReptSecCtgy) => {
        const lastCtgyList:typeof thrdCtgyList = []
        thrdCtgyList.forEach((thrdCtgy) => {
                if (noReptSecCtgy.secondctgyId === thrdCtgy.secctgyId){
                    lastCtgyList.push({
                        thirdctgyId:thrdCtgy.thirdctgyId,
                        thirdname:thrdCtgy.thirdname,
                        secctgyId:thrdCtgy.secctgyId
                    })
                }
        })
        const lastSecThrCtgy:LastSecThrCtgy = combine(noReptSecCtgy,{
            thirdctgys:lastCtgyList
        })
        lastSecThrCtgyList.push(lastSecThrCtgy)
    })
    return lastSecThrCtgyList
}