const express=require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// // const User = require('../models/user');
// const ProductData = require('../models/Productdata');
var ObjectId = require('mongodb').ObjectID;



const Productdata=require('./src/model/Productdata');
const userdata=require('./src/model/Registerdata');


const cors=require('cors');

var bodyparser=require('body-parser');
const productdata = require('./src/model/Productdata');

var app=new express();

app.use(cors());

app.use(bodyparser.json());

app.get('/products',function(req,res){

res.header('Access-Control-Allow-Origin',"*");
res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");

Productdata.find()
.then(function(products){
    // console.log(products);
    res.send(products);
})

});

app.post('/insert',function(req,res){

    res.header('Access-Control-Allow-Origin',"*");
res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");

console.log(req.body);
var products={


    ProductId:req.body.products.ProductId,
    ProductName:req.body.products.ProductName,
    ProductCode:req.body.products.ProductCode,
    releaseDate:req.body.products.releaseDate,
    description:req.body.products.description,
    price:req.body.products.price,
    starrating:req.body.products.starrating,
    imageUrl:req.body.products.imageUrl
    

}

var products=new Productdata(products); 
products.save();

})


app.post('/register',function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    
    console.log(req.body);

    var user={


        username:req.body.user.username,
        password:req.body.user.password,
        firstname:req.body.user.firstname,
        lastname:req.body.user.lastname,
        contactno:req.body.user.contactno

    }

    var user=new userdata(user); 
user.save();

});

app.get('/readmore/:id',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id current");
    Productdata.findOne({ _id: id })
        .then(function(products) {
            console.log(products);
            res.send(products);
            });
   
    
        // res.send(products);



   
})

app.get('/login',function(req,res){

    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var user=req.body.username;
    var pass=req.body.password;
    userdata.findOne({username:user,password:pass})
    .then(function(data){
        if(data.username==user&&data.password==pass){
            res.redirect('/products');
        }
       
    })
    .catch(function(){
    res.redirect("/");
    })


})

app.post('/delete',function(req,res){

    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-Methos: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var id=req.body.id;
console.log(id+"id get");
productdata.deleteOne({_id:id})
.then(products=>{

    console.log(products);
    res.send(products);

})


})

app.put('/update/:id', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id is updated");
    console.log(req.body);
    // var product = {
    //     propertyName:req.body.property.propertyName,
    //     propertyCode:req.body.property.propertyCode,
    //     description:req.body.property.description,
    //     rent:req.body.property.rent,
    //     starrating:req.body.property.starrating,
    //     imageUrl:req.body.property.imageUrl,
    //     address:req.body.property.address,
    //     contactnumber:req.body.property.contactnumber
    // }
    var product = {
       
    // ProductId:req.body.ProductId,
    ProductName:req.body.ProductName,
    ProductCode:req.body.ProductCode,
    releaseDate:req.body.releaseDate,
   
    price:req.body.price
   
    }
    
    console.log(product);
    // var product = new ProductData(product);
    // product.save();
    Productdata.findOneAndUpdate({_id:id},{'$set':{ProductName:product.ProductName,
        ProductCode:product.ProductCode,releaseDate:product.releaseDate, description:product.description, price:product.price,
        starRating:product.starrating, imageUrl:product.imageUrl}})
    .then((item)=>{
        console.log(item);
        item.save();

        console.log("Update Success");
    })
    

});

app.listen(4000);