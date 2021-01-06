'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Articles.belongsTo(models.Categories, {
        foreignKey:'CategoryId'
      });
      models.Articles.belongsTo(models.User, {
        foreignKey:'UserId'
      });
      models.Articles.hasMany(models.Comments)
    }
  };
  Articles.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    content: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Articles',
  });
  return Articles;
};