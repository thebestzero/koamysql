import {DataType} from "sequelize-typescript";
import { sequelize } from '../../../modules/baseDao'

class SecondCtgyModel{
    static createModel(){
        const model = sequelize.define(
            'secondctgy',
            {
                secondctgyId:{
                    type:DataType.INTEGER,
                    field:'secondctgyId',
                    autoIncrement:true,
                    primaryKey:true
                },
                secctgyname:{
                    type:DataType.STRING(20),
                    field: 'secctgyname',
                    allowNull:false
                },
                firstctgyId:{
                    type:DataType.INTEGER,
                    allowNull:false
                },
            }
        )
        return model
    }
}

export const secondCtgyModel = SecondCtgyModel.createModel()
