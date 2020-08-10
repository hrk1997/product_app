const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/products');
const Schema=mongoose.Schema;

const userSchema=new Schema({

username:String,
password:String,
firstname:String,
lastname:String,
contactno:String

})

var userdata=mongoose.model('userdata',userSchema);

module.exports=userdata;