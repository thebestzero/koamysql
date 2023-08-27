import { sequelize } from '../../../modules/baseDao'
import { DataType } from 'sequelize-typescript'

class ThirdCtgyModel {
    static createModel() {
        const model = sequelize.define('thirdctgy', {
            thirdctgyId: {
                type: DataType.INTEGER,
                field: 'thirdctgyId',
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            thirdname: {
                type: DataType.STRING,
                field: 'thirdname',
                allowNull: false
            },
            secctgyId: {
                type: DataType.INTEGER,
                allowNull: false
            }
        })
        model.sync({ force: false })
        return model
    }
}

export const thirdCtgyModel = ThirdCtgyModel.createModel()
