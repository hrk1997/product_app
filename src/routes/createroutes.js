const express=require('express');

const createRouter=express.Router();

const Bookdata=require('../modal/Bookdata');

createRouter
.get('/',function(req,res){

    res.render('create')
})

createRouter.post('/addd',function(req,res){
    // res.send("hiii");
 var item={ 
     title: req.body.title,
    author:req.body.author,
    image:req.body.image
 }

 var book=Bookdata(item);
 book.save();//saving to db
 res.redirect('/books');

})
module.exports=createRouter;