/*
 *   构建Sequelize的基础模型
 * */
import dbConfig from '../config/Dbconfig'
import { Dialect } from 'sequelize' // 数据库
import { Sequelize } from 'sequelize-typescript'
import path from "path";

class BaseDao {
  static baseDao = new BaseDao()
  sequelize!: Sequelize
  constructor() {
    this.initSeqConf('mysql')
  }
  initSeqConf(dialect: Dialect) {
    let { host, user, password, database, port } = dbConfig.getConfig()
    // 创建Sequelize对象，参数分别为数据库名称，数据库类型，密码，配置
    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      define: { timestamps: false, freezeTableName: true },//直接使用模型名称 User 作为表名
      dialect, //方言表示何种数据库
      pool:{// 数据库连接池
        max:10,
        min:5,
        idle:10000,// 空闲连接最长等待时间 毫秒
        acquire:1000//一条sql查询在获取连接资源之前的最长等待时间 秒
      }
    })
  }
  addModels(){
    const modulePath = path.join(process.cwd(),'/src/modules/decorateModel')
    this.sequelize.addModels([modulePath])
  }
}
const baseDao =  BaseDao.baseDao;
// 方案3，拓展model，使用模型类
baseDao.addModels()
// 方案1 使用sequelize.define
export const {sequelize} = baseDao
