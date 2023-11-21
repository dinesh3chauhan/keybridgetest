

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('keybridge', 'root', process.env.DB_PASS, {
    host: 'keybridge.cxwk2g74lyha.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  });
  
  async function connect() {
    try {
      await sequelize.authenticate();
    } catch (error) {
        console.log(err);
    }
  }
module.exports = {sequelize:sequelize,connect: connect}

     sequelize.authenticate().then(p=>{
        console.log('Connection has been established successfully.');
 
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
  // Other model options go here
});
Task.sync().then(() => {
    console.log('Table created successfully!');
    Task.create({
        created_by: "dinesh"
    }).then(p=>{
        console.log(p);
    }).catch(e=>{console.log(e)})
  });

       

     }).catch(err=>{
        console.error('Unable to connect to the database:', err);
 
     });