import {findSecondCtgyAndThirdCtgyByFirstCtgy} from "@/modules/ctgy/defineModel/oneToMany";

class CtgyDao {
    static async findSecondCtgyAndThirdCtgyByFirstCtgyDao(firstctgyid: number){
        return await findSecondCtgyAndThirdCtgyByFirstCtgy(firstctgyid)
    }
}

export const {findSecondCtgyAndThirdCtgyByFirstCtgyDao} = CtgyDao
