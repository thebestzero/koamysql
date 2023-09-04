/*
* 1. 获取二级数组
* 2. 去重二级
* 3. 获取三级
* 4，定义结果数组及类型
* 5. 循环判断插入
*
* */

import {combine, combineRelativeCtgy, EleOfArr, getNoReptItem, getSubItemsFrmArr} from "@/modules/commontypes";

type SecThrdCtgy = 	{
    "secondctgyId": number,
    "secctgyname": string,
    "firstctgyId": number,
    "thirdctgyId": number,
    "thirdname": string,
    "secctgyId": number
}
export function convert(secThrdCtgyList:SecThrdCtgy[]) {
        // 获取二级数组
        const subItemsFrmSecCtgy = getSubItemsFrmArr(secThrdCtgyList,'secondctgyId','secctgyname','firstctgyId')
        // 去重二级
        const noReptSecList = getNoReptItem(subItemsFrmSecCtgy,'secondctgyId')
        // 获取三级
        const thrdCtgyList = getSubItemsFrmArr(secThrdCtgyList,'thirdctgyId','thirdname','secctgyId')
        // 定义结果数组及类型
        const relativeThrdCtgys = combineRelativeCtgy(noReptSecList,'thirdCtgys',[])
        const result:typeof relativeThrdCtgys= []
        type ResultItem = EleOfArr<typeof relativeThrdCtgys>
        noReptSecList.forEach((secCtgy)=>{

            const thrdCtgyBySec:typeof thrdCtgyList = []

            thrdCtgyList.forEach((thrdCtgy)=>{
                if (secCtgy.secondctgyId === thrdCtgy.secctgyId){
                    thrdCtgyBySec.push(thrdCtgy)
                }
            })

            const combineSecThrd = combine(secCtgy,{thirdCtgys:thrdCtgyBySec})
            result.push(combineSecThrd)
        })
        return result
}
