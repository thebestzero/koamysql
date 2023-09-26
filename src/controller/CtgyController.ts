import {Context} from "koa";
import {get} from "@/decorator/reqmethoddecorator";
import CtgyDao from "@/modules/ctgy/dao/ctgyDao";
import {success} from "@/common/ResResult";
import {Controller} from "@/decorator/controllerdecorator";
import Redis from 'koa-redis'

interface RedisClient {
    set(key:string,value:string):any
    get(key:string):any
    hset(obj:string,key:string,value:any):any
    hmset(obj:string,...keyvalue:any[]):any
    hget(obj:string,key:string):any
    hgetall(obj:string,):any
    hmget(obj:string,...key:any[]):any
}

@Controller('/ctgymodule')
class CtgyController{

    @get('/testRedis')
    async testRedis(ctx:Context){
        const redisClient:RedisClient = Redis({port:6379,host:'127.0.0.1'}).client
        // 普通字符串
        // redisClient.set('username','zdsd')
        // ctx.body = await redisClient.get('username')
        // hash结构数据存取
        redisClient.hmset('customer','name','lisi','age',23,'phone','111')
        ctx.body = await redisClient.hgetall('customer')
    }
    @get('/findFirstCtgyList')
    async findFirstCtgyList(ctx:Context){
        ctx.body = success(await CtgyDao.findFirstCtgyList())
    }

    @get("/findSecThrdCtgys/:firstctgyid")
    async findSecThirdCtgys(ctx:Context){
        const {firstctgyid} = ctx.params;
        const res = await CtgyDao.findSecThrdCtgys(
            parseInt(firstctgyid)
        )
        ctx.body = success(res)
    }
}

/*
    console.log(Object.getOwnPropertyNames(CtgyController.prototype))// [ 'constructor', 'findSecThirdCtgys' ]
    console.log(Object.keys(CtgyController.prototype),Object.keys(CtgyController.prototype).length)// [] 0
    // 分下下为什么 第一个可以得到class类上的方法 而第二个确是空数组 class 类内部的方法默认都是不可枚举的
*/



