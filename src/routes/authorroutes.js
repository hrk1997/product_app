const express=require('express');
const authorRouter=express.Router();
const authdata=require('../modal/authdata');
function au(nav){

// var booksl=[

//     {
//         title:"JOSEPH",
//         img:"th.jpg",
//         author:"MOBSTER",
//         about:"He was born to Italian immigrants in New York City, where he lived, attended college and began his career through his young adult years. After working odd jobs and as a banker, Barbera joined Van Beuren Studios in 1927 and subsequently Terrytoons in 1929. In 1930, he moved to California and while working at Metro-Goldwyn-Mayer (MGM), Barbera met William Hanna. The two men began a collaboration that was at first best known for producing Tom and Jerry. In 1957, after MGM dissolved their animation department, they co-founded Hanna-Barbera, which became the most successful television animation studio in the business, producing programs such as The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound, and The Jetsons. In 1967, Hanna-Barbera was sold to Taft Broadcasting for $12 million, but Hanna and Barbera remained heads of the company. In 1991, the studio was sold to Turner Broadcasting System,[2] which in turn was merged with Time Warner, owners of Warner Bros., in 1996; Hanna and Barbera stayed on as advisors. "
        
//     },
//     {
//         title:"J K Rowling",
//         img:"row.jpg",
//         author:"AUTHOR,SCREENWRITER,PRODUCER,PHILANTHORPIST",
//         about:"Joanne Rowling, CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, screenwriter, producer, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith."
//     }
    
//     ]
    
   
authorRouter.route('/')
.get(function(req,res){
    authdata.find()
    .then(function(author){
        res.render('author',{
            nav,
            author
        
        })
    })


})

authorRouter.get('/:id',function(req,res){
    const id=req.params.id;
    authdata.findOne({_id:id})
    .then(function(authors){
        res.render('authors',{
            nav,
            authors
        })
    })

})

    // })
return authorRouter;
}

module.exports=au;