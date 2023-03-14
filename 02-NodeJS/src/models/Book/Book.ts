import { Model, DataTypes } from 'sequelize'
import sequelize from '../../database/db'

class Book extends Model {
  public id!: number
  public title!: string
  public author!: string
}

Book.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  author: {
    type: new DataTypes.STRING(128),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Book',
  tableName: 'Books',
  timestamps: false
})

export default Book
