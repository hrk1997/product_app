const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema=mongoose.Schema;

const BookSchema=new Schema({

    title:String,
    author:String,
    image:String

});

//Model creation

var Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;
