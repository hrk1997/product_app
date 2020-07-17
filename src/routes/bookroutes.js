const express=require('express');

const booksRouter = express.Router();

const Bookdata=require('../modal/Bookdata');

function ro(nav){

// var books=[

//     {
//         title:"tom and jerry",
//         img:"th.jpg",
//         author:"joseph"
        
//     },
//     {
//         title:"harry potter",
//         img:"row.jpg",
//         author:"J K Rowling"
        
//     }
    
//     ]
    
    booksRouter.route('/')
    
    .get(function (req,res){

        Bookdata.find()
        .then(function(books){
             res.render("books",
       {nav,
       books
    });
})
    })
  booksRouter.get('/edit/:id',function(req,res){
      const id=req.params.id;
      var edit=Bookdata.findById(id);
      edit.exec(function(err,data){
          if(err)throw err;
     
    res.render('edit',{
        records:data
    });
  }) })

  booksRouter.get('/delete/:id',function(req,res){
      var bid=req.params.id;
      Bookdata.deleteOne({_id:bid})
      .then(function(books){
          res.redirect('books',{
            
          });
      })
  })

  booksRouter.get('/edit/edittt/:id',function(req,res){
var bi=req.params.id;
var item={
    title:req.body.title,
    author:req.body.author
}
Bookdata.findOne({_id:bi})
.then(function(books){
    res.render('books', Bookdata.updateOne({ _id: bi }, { $set: { 'title': item.title, 'author':item.author } }),
    )
books

})

  })
    
    booksRouter.get('/:id',function(req,res){
    
    const id=req.params.id;

    Bookdata.findOne({_id:id})
    .then(function(book){
    
    res.render('book',{
       nav,
       up:[{link:'/update',dir:'update'},{link:'/delete',dir:'delete'}],
        book
    
    })
});
    })
    return booksRouter;
}

    module.exports=ro;