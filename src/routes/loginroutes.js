const express=require('express');

const loginRouter=express.Router();

const signdata=require('../modal/signupdata');

const logdata=require('../modal/logdata');

loginRouter.route('/')
.get(function(req,res){

    res.render('login')
})

// loginRouter.post('/exx',function(req,res){
//     // res.send("hiii");
    
//         var item = {
//             email: req.body.email,
//             password: req.body.password,

//         }
  

//  signdata.find({_id:id},{email:mail},{password:password})
//  console.log(obj);
//  if (!obj) {



//      res.redirect('books');

//  } else {
//      res.redirect('/');
//  }


 



// })



module.exports=loginRouter;