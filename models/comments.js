'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Comments.belongsTo(models.Articles, {
        foreignKey:'ArticleId'
      })
      models.Comments.belongsTo(models.User, {
        foreignKey:'id'
      })
    }
  };
  Comments.init({
    content: DataTypes.STRING,
    ArticleId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};