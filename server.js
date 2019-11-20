
const express=require('express');
const connectdb=require('./db/connection');
const app=express();
connectdb();

app.use(express.json({extended:false}));
app.use('/api/usermodel',require('./api/user'));

const Port=process.env.Port||3000;

app.listen(Port,()=>console.log('server started'));
