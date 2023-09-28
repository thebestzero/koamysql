import RedisConfig, { RedisClient } from '@/config/RedisConfig'

class RedisUtil implements RedisClient {
  static redisUtil: RedisUtil = new RedisUtil()
  redisClient = RedisConfig.redisServer()
  async hset(obj: string, key: string, value: any) {
    await this.redisClient.hset(obj, key, JSON.stringify(value))
  }
  async hget(obj: string, key: string) {
    const value = await this.redisClient.hget(obj, key)
    return value ? JSON.parse(value) : undefined
  }
  get(key: string): any {}
  hgetall(obj: string): any {}
  hmget(obj: string, ...key: any[]): any {}
  hmset(obj: string, ...keyvalue: any[]): any {}
  set(key: string, value: string): any {}
}

export default RedisUtil.redisUtil