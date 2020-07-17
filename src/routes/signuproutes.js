const express=require('express');

const signRouter=express.Router();

const SignData=require('../modal/signupdata');

signRouter.route('/')
.get(function(req,res){

res.render('signup')

})
signRouter.post('/new',function(req,res){
    // res.send("hiii");
 var item={ 
    //  title: req.body.title,
    // author:req.body.author,
    // image:req.body.image

    fname:req.body.fname,
    lname:req.body.lname,
    cnum:req.body.cnum,
    mail:req.body.mail,
    password:req.body.password,
    repassword:req.body.repassword
 }

 var sign=SignData(item);
 sign.save();//saving to db
 res.redirect('/books');

})
module.exports=signRouter;