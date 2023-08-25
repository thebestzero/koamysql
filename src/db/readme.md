# 如何使用Sequelize完成CRUD
1. 使用sequelize连接mysql,基本配置 baseDao
2. 执行查询
   a. 使用sequelize的define方法定义一个模型来实现 单表，不适用多表级联添加更新
   b. 使用sequelize的原生操作-所有操作
   c. 使用模型类来实现-单表查询  

方案3： 单表查询操作，模型类