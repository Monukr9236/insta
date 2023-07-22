const mongoose=require('mongoose');

// Defining schema for the user
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  email:String,
  password:String
});

// Defining model
const User=mongoose.model('users',itemSchema);

module.exports=User;
