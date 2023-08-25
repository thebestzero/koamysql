/*
 * 数据库配置分装 泛型综合+重载
 * */

//数据库连接配置
interface DBConnConfig {
  host: string
  user: string
  password: string
  port: number
  database: string
}
//环境配置
interface EnvConfig {
  dev: DBConnConfig
  prod: DBConnConfig
}

class Config {
  static conf: Config = new Config()
  env!: keyof EnvConfig
  envConfig!: EnvConfig

  constructor() {
    this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
    this.initConfig()
  }

  initConfig() {
    this.envConfig = {
      dev: {
        host: 'localhost',
        user: 'admin',
        password: '123',
        port: 3306,
        database: 'dangdang',
      },
      prod: {
        host: 'www.baidu.com',
        user: 'root',
        password: '123',
        port: 3306,
        database: 'dangdang',
      },
    }
  }
  getConfig(): DBConnConfig
  getConfig(key: string): string
  getConfig(key: any = '') {
    if (this.isDbConnConfigKeys(key)) {
      return this.envConfig[this.env][key]
    } else {
      return this.envConfig[this.env]
    }
  }
  // 自定义守卫
  isDbConnConfigKeys(key: any): key is keyof DBConnConfig {
    return (
      key === 'host' ||
      key === 'user' ||
      key === 'password' ||
      key === 'port' ||
      key === 'database'
    )
  }
}

export default Config.conf
