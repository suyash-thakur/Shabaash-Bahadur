const  express =  require('express');
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var payUMoney = require('payumoney_nodejs');
const authRoute = require("./Routes/auth");
const app = express();

const router = express.Router();

mongoose.connect(
  "mongodb://localhost:27017")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000}));

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");


  next();
});


app.use('/api/auth', authRoute);
module.exports = app;