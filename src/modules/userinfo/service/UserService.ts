import UserDao,{UserInfo} from "@/modules/userinfo/dao/UserDao";
import jwt from 'jsonwebtoken'
class UserService {
    static userService: UserService = new UserService()
    async login(username:string,password:string){
        const userInfo = await UserDao.findOneUser(username,password)
        if (userInfo){
            this.createJWTToken(userInfo)
        }
        return userInfo
    }
    createJWTToken(userInfo:UserInfo){
        const token = jwt.sign({data:userInfo},'dkdj88a1',{expiresIn:'30h',header:{alg:'HS256',typ:'Jwt'}})
        userInfo.token = token
    }
}

export default UserService.userService
