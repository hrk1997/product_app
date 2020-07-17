const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema=mongoose.Schema;

const logSchema=new Schema({

  email:String,
  password:String
});

//Model creation

var logdata=mongoose.model('logdata',logSchema);

module.exports=logdata;
