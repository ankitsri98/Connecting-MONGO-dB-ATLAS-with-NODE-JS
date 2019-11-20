const mongoose=require('mongoose');


const URI='mongodb+srv://ankit034:ankitsrivastava98@cluster0-lwn5a.mongodb.net/test';

const connectdb=async()=>{
  await mongoose.connect(URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
  });
  console.log('db connected..!!!');
};


module.exports=connectdb;