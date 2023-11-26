//require and setup connection
const mongoose=require("mongoose");

//below code is used to create db
//mongoose.connect("mongodb://127.0.0.1:2701);
mongoose.connect('mongodb://127.0.0.1:27017');

//creating schema of table
const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
})

//creating collection or table
//mongoose.model("collection_ka_naam",schema_ka_naam)
module.exports=mongoose.model("users1",userschema);