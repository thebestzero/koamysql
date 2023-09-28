import Redis from "koa-redis";
interface DbConConf {
  host: string
  port: number
}

interface EnvConf {
  dev: DbConConf
  prod: DbConConf
}

export interface RedisClient {
  set(key: string, value: string): any
  get(key: string): any
  hset(obj: string, key: string, value: any): any
  hmset(obj: string, ...keyvalue: any[]): any
  hget(obj: string, key: string): any
  hgetall(obj: string): any
  hmget(obj: string, ...key: any[]): any
}

class RedisConfig {
  static redisConf: RedisConfig = new RedisConfig()
  envConf!: EnvConf
  env!: keyof EnvConf
  constructor() {
      this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
      this.initConf()

  }
  initConf() {
    this.envConf={
        dev:{port:6379,host:'127.0.0.1'},
        prod:{port:6379,host:'127.0.0.1'}
    }
  }
  getConf(){
      return this.envConf[this.env]
  }
  redisServer():RedisClient{
      return Redis(this.getConf()).client
  }
}

export default RedisConfig.redisConf
