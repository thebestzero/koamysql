/*
 *  1. 使用sequelize连接mysql,基本配置
 * */
import dbConfig from '../../config/Dbconfig'
import { Dialect } from 'sequelize' // 数据库
import { Sequelize } from 'sequelize-typescript'

class BaseDaoDefine {
  static baseDaoOrm = new BaseDaoDefine()
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
    })
  }
}

export const {sequelize} = BaseDaoDefine.baseDaoOrm
