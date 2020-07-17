const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');



function validate(){
    var eMail=document.getElementById("mail").value;
    var pass=document.getElementById("password").value;
    var p=document.getElementById(Para);
    
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let passs= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
    var e=regexp.test(eMail);
     var ps=passs.test(pass);
    
     if(eMail==""||pass==""){
         alert("enter all fields");
         return false;
         
     }
    
     else if(e==false){
        alert("check the email address");
        return false;
    }
    
    else if(ps==false){
     
        alert("password should contain an uppercase,lowercase,special characters and numbers");
        return false;
    }
    
    else{
        return true;
    }
    
    }
    function strength(){
        var p=document.getElementById("password").value;
        var stre=document.getElementById("stre1");
        var strong= new RegExp("^(?=.{16,}).*");
        var medium=new RegExp("^(?=.{10,}).*");
        var poor=new RegExp("^(?=.{8,}).*");
      
        if(strong.test(p)){
      stre.innerHTML="<span style='color:green'>good!</span>";
        }
        else if(medium.test(p)){
          stre.innerHTML="<span style='color:blue'>normal!</span>";
        }
        else{
          stre.innerHTML="<span style='color:red'>weak!</span>";
        }
      }
    