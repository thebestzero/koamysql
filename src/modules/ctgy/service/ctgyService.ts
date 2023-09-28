import CtgyDao from '@/modules/ctgy/dao/ctgyDao'
import redisUtil from '@/common/RedisUtil'
class CtgyService {
  static ctgyService: CtgyService = new CtgyService()
  async findFirstCtgyList() {
    const firstCtgyRedis = await redisUtil.hget('firstCtgysHash', 'firstCtgys')
    if (!firstCtgyRedis) {
      // 首次 redis 没有数据
      console.log('enter MysqlDb')
      const firstCtgys = await CtgyDao.findFirstCtgyList()
      redisUtil.hset('firstCtgysHash', 'firstCtgys', firstCtgys)
      return firstCtgys
    } else {
      console.log('enter Redis Cache')
      return firstCtgyRedis
    }
  }
}

export default CtgyService.ctgyService
