const express = require('express')
const app = express()
const port = 3000
const { Sequelize, DataTypes } = require('sequelize');

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/save', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



const sequelize = new Sequelize('keybridge', 'root', 'dinesh@123', {
    host: 'localhost',
    dialect: 'mysql'
  });



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

