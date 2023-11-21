
const { sequelize } = require("./db");
const { DataTypes } = require("sequelize");

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false
  },
  client: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  project_name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  task_title: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  status: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  assignee: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  task_type: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  priority: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  notes: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email_notes: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  
});

module.exports = {Task:Task};