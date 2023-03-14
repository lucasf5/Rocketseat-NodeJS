import { Model, DataTypes } from 'sequelize'
import sequelize from '../../database/db'
import User from '../../models/User/User'
import Book from '../../models/Book/Book'

class UserBook extends Model {
  public id!: number
  public userId!: number
  public bookId!: number
}

UserBook.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  bookId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'Book',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'UserBook',
  tableName: 'UserBooks',
  timestamps: false
})

// User to Book (hasMany)
User.hasMany(UserBook, {
  // source = origin of the relationship
  sourceKey: 'id',
  foreignKey: 'userId'
})

// Book to User (hasMany)
Book.hasMany(UserBook, {
  sourceKey: 'id',
  foreignKey: 'bookId'
})

// UserBook to User (belongsTo)
UserBook.belongsTo(User, {
  // target = destination of the relationship
  targetKey: 'id',
  foreignKey: 'userId'
})

// UserBook to Book (belongsTo)
UserBook.belongsTo(Book, {
  targetKey: 'id',
  foreignKey: 'bookId'
})

export default UserBook
