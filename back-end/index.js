const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const route= require("./router/route.js");
const cors=require("cors")
require('dotenv').config()
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
// app.use(express.static(__dirname+"/public"))

mongoose.connect(process.env.DB_URL + process.env.DB_NAME, {
    useNewUrlparser: true,
    useUnifiedTopology: true
})
    .then(console.log("Connection success.."))
    .catch((err)=>console.log(err))

app.use(route);
app.listen(process.env.PORT, () => console.log("Listening to port:",process.env.PORT))
