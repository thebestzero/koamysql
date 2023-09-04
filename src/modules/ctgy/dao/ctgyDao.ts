import {findSecondCtgyAndThirdCtgyByFirstCtgy} from "@/modules/ctgy/defineModel/oneToMany";
import {sequelize} from "@/modules/BaseDao";
import {convert} from "@/modules/ctgy/ctgytypes";

class CtgyDao {
    static async findSecondCtgyAndThirdCtgyByFirstCtgyDao(firstctgyid: number){
        return await findSecondCtgyAndThirdCtgyByFirstCtgy(firstctgyid)
    }
    static async findSecThrdCtgys(firstctgyId: number) {
        const sql = `select * from secondctgy sc inner join thirdctgy tc on sc.secondctgyId = tc.secctgyId where sc.firstctgyId = ${firstctgyId}`
        const res = (await sequelize.query(sql))[0] as any[]
        console.log(res)
        return convert(res)
    }
}

export default CtgyDao
