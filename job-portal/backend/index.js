const express = require("express");
const paths = require("path");
const bcrypt = require("bcryptjs");

const app = express();
app.set("view engine",'ejs');

app.get("/",(req,res)=>{
    res.render("login");
});


const port = 5000;
app.listen(port,()=>{
    console.log('Server running on port', port);
});