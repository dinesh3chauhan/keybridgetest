const express = require('express');
const { connect, sequelize } = require("./db");
const {saveTask} =  require("./taskcontroller");
var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())   

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  });

app.post("/api/task", saveTask);

app.get("/",function(req,res){
    res.send("hello there");
})
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Route: ${req.originalUrl} does not exist on this server`,
  });
});

const PORT = 8000;
app.listen(PORT, async () => {
  console.log(" started ");
  await connect();
  sequelize.sync({ force: false }).then(() => {
    console.log(" sync");
  });
});