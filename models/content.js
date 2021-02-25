'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.group, {
        through: 'multigroup',
        foreignKey: 'contentid'
      });
    }
  };
  content.init({
    cost: DataTypes.INTEGER,
    category: DataTypes.STRING,
    text: DataTypes.STRING,
    updown: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'content',
  });
  return content;
};