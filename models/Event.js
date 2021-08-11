const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  }
  ,
  {
    sequelize,
    timesstamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Events'
  }
);

module.exports = Event;