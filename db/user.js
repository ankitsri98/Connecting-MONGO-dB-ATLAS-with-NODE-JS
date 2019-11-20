const mongoose= require('mongoose');

const user=mongoose.Schema({
  firstname:{
    type:String
  },
  lastname:{
    type:String
  }
});

module.exports= User= mongoose.model('user',user);
