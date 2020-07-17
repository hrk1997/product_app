const express=require('express');
const authRouter=express.Router();
const authdata=require('../modal/authdata');
 
authRouter.get('/',function(req,res){

    res.render('authorcre')

})

authRouter.post('/book2/adding',function(req,res){

var item={

    author:req.body.author,
    occupation:req.body.occupation,
    about:req.body.about,
    image:req.body.image

}

var auth=authdata(item);
auth.save();
res.redirect('/books');

})
module.exports=authRouter;