import jwt,{JwtPayload} from "jsonwebtoken";
export default class BaseController{
    static verifyToken(){
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp3dCJ9.eyJkYXRhIjp7InVzZXJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiMTIzIiwiYWRkcmVzcyI6ImJlaWppbmciLCJ2YWxpZCI6MX0sImlhdCI6MTcwMTI0NTM0MiwiZXhwIjoxNzAxMzUzMzQyfQ.74DQ5V2bjSiLLXCEG8iFO0UeX7tTi2voyLaBNJlp4SA`
        let res:JwtPayload = jwt.verify(token,'dkdj88a1') as JwtPayload
        return res ? res.data : undefined
    }
}

export const {verifyToken} = BaseController