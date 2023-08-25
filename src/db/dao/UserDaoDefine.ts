import { model } from '../defineModel'
import { Op } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
class UserDaoDefine {
  static useDao: UserDaoDefine = new UserDaoDefine()
  addUser(userInfo: UserInfo) {
    return model.create(userInfo)
  }
  findAllUser() {
    return model.findAll({
      raw: true, //表示以原始数据方式返回结果，即返回的是纯粹的 JSON 数据，而不是 Sequelize 模型对象。
    })
  }
  // 投影查询
  findByProps() {
    return model.findAll({
      raw: true,
      attributes: ['username', 'password'],
    })
  }
  // or and 查询
  findByUsernameAndPsw(username: string, password: string) {
    return model.findOne({
      raw: true,
      where: {
        [Op.and]: [{ username }, { password }],
      },
    })
  }
  findByUsernameAndAddress(username: string, address: string) {
    return model.findAll({
      raw: true,
      where: {
        [Op.or]: [
          {
            username: {
              [Op.like]: '%' + username + '%',
            },
          },
          {
            address: {
              [Op.like]: '%' + address + '%',
            },
          },
        ],
      },
    })
  }
  // 模糊查询
  findByLike(key: string) {
    return model.findAll({
      raw: true,
      where: {
        username: {
          [Op.like]: '%' + key + '%',
        },
      },
    })
  }
  // 聚合查询 select address,count(valid) as 总人数 from userinfo where valid=1 group by address;
  countUserinfo() {
    return model.findAll({
      raw: true,
      group: ['address'],
      attributes: [
        'address',
        [Sequelize.fn('count', Sequelize.col('valid')), 'totalCount'],
      ],
      where: {
        valid: 1,
      },
    })
  }
  // 分页查询  select * from userinfo limit  条数 offset 起始位置
  findUserWithPager(offset: number, pageSize: number) {
    return model.findAll({
      raw: true,
      limit: pageSize,
      offset,
    })
  }
}

export type UserInfo = {
  userid: number
  username: string
  password: string
  address: string
  valid: number
}

export default UserDaoDefine.useDao
