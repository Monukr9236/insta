require('./config');
const express=require('express');
const cors=require('cors');
const User=require('./user');
const app=express();
app.use(express.json());
app.use(cors());


app.post('/add',async(req,resp)=>{
    const data={email:req.body.email,password:req.body.password};
    const addUser=new User(data);
    const saving=await addUser.save();
    resp.json({message:"success",status:200});
})


app.listen(4000,()=>{
    console.log('listening...')
});