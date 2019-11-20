const mongoose=require('mongoose');
const express=require('express');
const User=require('../db/user');
const route=express.Router();


route.post('/', async(req,res)=>{
  const{firstname,lastname}=req.body;
  let user={};
  user.firstname=firstname;
  user.lastname=lastname;
  let usermodel=new User(user);
  await usermodel.save();
  res.json(usermodel);
});

module.exports=route;