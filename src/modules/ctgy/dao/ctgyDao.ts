import {findSecondCtgyAndThirdCtgyByFirstCtgy} from "@/modules/ctgy/defineModel/oneToMany";
import {sequelize} from "@/modules/BaseDao";

class CtgyDao {
    static async findSecondCtgyAndThirdCtgyByFirstCtgyDao(firstctgyid: number){
        return await findSecondCtgyAndThirdCtgyByFirstCtgy(firstctgyid)
    }
    static async findSecThrdCtgys(firstctgyId: number) {
        const sql = `select * from secondctgy sc inner join thirdctgy tc on sc.firstctgyId = tc.secctgyId where sc.firstctgyId = ${firstctgyId}`
        return (await sequelize.query(sql))[0]
    }
}

export default CtgyDao
