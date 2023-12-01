import jwt,{JwtPayload} from "jsonwebtoken";
export default class BaseController{
    static verifyToken(token:string){
        let res:JwtPayload = jwt.verify(token,'dkdj88a1') as JwtPayload
        return res ? res.data : undefined
    }
}

export const {verifyToken} = BaseController