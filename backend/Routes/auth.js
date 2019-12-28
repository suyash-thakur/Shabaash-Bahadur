const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
var payUMoney = require('payumoney_nodejs');
const User  = require("../Model/User");
const checkAuth = require("../Middleware/checkauth");


const router = express.Router();

payUMoney.isProdMode(true);
payUMoney.setProdKeys('Sn6dyVBD', 'BWxQfOQdtJ', '3UCR2y8rwQSvt6rUasR5HSeVxg+IKg5UaDYr0OApxlo=');

router.post("/signup", (req, res, next) => {
  console.log(req.body);
 bcrypt.hash(req.body.password, 10).then(hash => {
   const user = new User({
     name: req.body.name,
     email: req.body.email,
     password: hash,
     vehicle: [{vehicleType: req.body.vehicleType, model: req.body.model, company: req.body.company, registrationNumber: req.body.registrationNumber}],
     whatsApp: req.body.whatsApp,
     startDate: req.body.startDate,
     txnid: req.body.txnid,
     address: req.body.address,
   });
   user
     .save()
     .then(result => {
       res.status(201).json({
         message: "User created!",
         result: result
       });
     })
     .catch(err => {
       res.status(500).json({
         error: err
       });
     });
 });
});


router.post("/login",(req, res, next) => {
   let fetchedUser;
   User.findOne({ email: req.body.email })
    .then(user => {
         if (!user) {
           return res.status(401).json({
               message: "Auth failed"
           });
         }
       fetchedUser = user;
       return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if(!result) {
          return res.status(401).json({
              message: "Auth failed"
          });
      }
    const token = jwt.sign(
        {email: fetchedUser.email, userId: fetchedUser._id},
       'letmein@26',
       { }
     );
     res.status(200).json({
         token: token

     });
    })
    .catch(err => {
        return res.status(401).json({
            message: "Auth failed"
        });
    });
});
router.get("/userInfo:id",checkAuth, (req, res, next) => {
 User.findById(req.params.id).then(user => {
   if (user) {
     res.status(200).json(user);
   } else {
     res.status(404).json({ message: "Post not found!" });
   }
 });
});
router.put("/userUpdate:id",checkAuth, (req, res, next) => {
 const user = new User({
   _id: req.body.id,
   name: req.body.name,
  
 });
 console.log(user);
 User.updateOne({_id: req.params.id}, user).then(result => {
   res.status(200).json({ message: "Update successful!" });
 });
});

router.post('/pay', (req, res, next) => {
  console.log(req.body);
  var requestBody = {

    "firstname" : req.body.name,
    "lastname" : "",
    "email" : req.body.email,
    "phone" : req.body.phone,
    "amount" : req.body.amount,
    "productinfo" : "car Wash",
    "txnid" : req.body.txnid, //generate unqiue transaction Id at client/server side
    "surl" : "http:localhost:3000/app/success",
    "furl" : "http:localhost:3000/fail"

  };
  payUMoney.pay(requestBody, function(error, data) {
    if (error) {
      console.log(data);
    } else {
      // You will get a link in response to redirect to payUMoney
      console.log(data);
      res.status(200).json({
        url: data
      });
  
  
    }
  });
  
});


module.exports = router;
