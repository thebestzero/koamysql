import { secondCtgyModel } from './secondCtgyModel'
import { thirdCtgyModel } from './thirdCtgyModel'
/*
* sequelize多表关联限制性：表名复数问题，
* */
/*
* 三级分类归属于二级分类 外键：secctgyId 对应二级分类主键 secondctgyId
* */
// OneToMany
secondCtgyModel.hasMany(thirdCtgyModel,{as:'thirdCtgys',foreignKey:'secctgyId'})
// ManyToOne
thirdCtgyModel.belongsTo(secondCtgyModel,{foreignKey:'secctgyId',targetKey:'secondctgyId'})

export const findSecondCtgyAndThirdCtgyByFirstCtgy = async (firstctgyid:number) => {
  const res = await secondCtgyModel.findAll({
      // raw:true,
      where:{firstctgyid},
      include:[//include属性被用于表示secondCtgyModel模型与thirdCtgyModel模型之间的关联关系。通过指定第一个参数为thirdCtgyModel，您告诉Sequelize在查询secondCtgyModel时同时查询并包含与之关联的thirdCtgyModel模型的数据
          {
              model:thirdCtgyModel,
              as:'thirdCtgys'
          }
      ]
  })
   return res
}

