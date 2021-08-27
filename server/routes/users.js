var express = require('express');
var router = express.Router();
var User = require('../models/usersModel');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', function(req, res, next) {
  addToDB(req, res);
});

async function addToDB(req, res){

  var user = new User({
    idNo:req.body.idNo,
    fullname:req.body.fullname,
    username:req.body.username,
    email:req.body.email,
    phoneNumber:req.body.phoneNumber,
    password:User.hashPassword(req.body.password),
    created_at: Date.now()
  });

  try{
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }

}

module.exports = router;
