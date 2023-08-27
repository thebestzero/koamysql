## 如何使用Sequelize完成CRUD
一、使用sequelize连接mysql,基本配置 /config/Dbconfig
二、构建sequelize基础类 baseDao
三、执行查询 
1. 使用sequelize的define方法定义一个模型来实现 单表，不适用多表级联添加更新
   baseDao --> defineModel --> userDao
2. 使用sequelize的原生操作-所有操作
3. 使用模型类来实现-单表查询
   baseDao --> baseDao.addModel(decorateModel) --> userDao

## 数据库连接池
通过建立一个数据库连接池以及一套连接使用管理策略，使得一个数据库连接可以得到高效、安全的复用，避免了数据库连接频繁建立、关闭的开销。
