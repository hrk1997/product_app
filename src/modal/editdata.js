const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema=mongoose.Schema;

const editSchema=new Schema({

    title:String,
    author:String,
    // image:String

});

//Model creation

var editdata=mongoose.model('editdata',editSchema);

module.exports=editdata;