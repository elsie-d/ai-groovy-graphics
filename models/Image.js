const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');




class Image extends Model {}

Image.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,

    },
    url: {
      type:DataTypes.STRING(500),
      allowNull: false,
      unique: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      }

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);

module.exports = Image;