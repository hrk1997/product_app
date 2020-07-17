const express=require('express');

const editRouter=express.Router();

const editdata=require('../modal/editdata');

const Bookdata=require('../modal/Bookdata');

editRouter
.get('/',function(req,res){

    res.render('edit')
})

if (req.file) {
    var ab = Bookdata.updateOne({ _id: id }, { $set: { 'title': item.title, 'author': item.author} }, (err, result) => {
        if (err) {
            return console.log(err);
        }
    });
} else {
    var ab = Bookdata.updateOne({ _id: id }, { $set: { 'title': item.title, 'author': item.author} }, (err, result) => {
        if (err) {
            return console.log(err);
        }
    });
}

res.redirect('/books');




module.exports=editRouter;