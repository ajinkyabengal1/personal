const express = require("express");
const cors = require("cors");
const app = express();
const port =process.env.PORT || 3000;

app.use(cors());

const apiData = require('./apidata.json');

app.get("/",(req,res)=>{
    res.send("Server Started Successfully !!");
});

app.get("/service",(req,res)=>{
res.send(apiData);
})

app.listen(port, ()=>{
console.log("Server Connected Successfully !!");
});