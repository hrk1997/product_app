const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/products');
const Schema=mongoose.Schema;

const productSchema=new Schema({

ProductId:Number,
ProductName:String,
ProductCode:String,
releaseDate:String,
description:String,
price:Number,
starrating:Number,
imageUrl:String

})

var productdata=mongoose.model('productdata',productSchema);

module.exports=productdata;