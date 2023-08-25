/*
 * 方案1：1.创建模型
 * */

import { sequelize } from '../dao/BaseDaoDefine'
import { DataType, DataTypes } from 'sequelize'

class UserInfo {
  static createModel() {
    const model = sequelize.define(
      'userinfo',
      //在这里定义模型属性
      {
        userid: {
          type: DataTypes.INTEGER,
          field: 'userid',
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(30),
          field: 'username',
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(20),
          field: 'password',
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(50),
          field: 'address',
          allowNull: true,
        },
        valid: {
          type: DataTypes.TINYINT,
          field: 'valid',
          allowNull: true,
        },
      },
      {
        freezeTableName: true, // true 表示使用给定的表名，false 表示模型名后加 s 作为表名
        timestamps: false, // true 表示给模型加上时间戳属性(createAt、updateAt), false 表示不带时间戳属性
      },
    )
    // model.sync({force:true})  //强制同步模型与数据库，即会先删除已存在的表，然后再重新创建表。
   return model
  }
}

export const model = UserInfo.createModel()
