
function create(){
 var fName=document.getElementById("fname").value;
 var lName=document.getElementById("lname").value;
 var cNum=document.getElementById("cnum").value;
 var eMail=document.getElementById("mail").value;
 var pass=document.getElementById("password").value;
 var cpass=document.getElementById("cp").value;
 var pr=document.getElementById("Para");
 var rss=document.getElementById("Parag");

 let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
 let passs= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
 let phno=/^([0-9]{3,3})([0-9]{3,3})([0-9]{4,4})$/;

 var e=regexp.test(eMail);
 var p=phno.test(cNum);
 var ps=passs.test(pass);

if(fName==""||lName==""||cNum==""||eMail==""||pass==""||cpass==""){
  //  rss.innerHTML="enter all fields";
  alert("enter all fields");
    return false;
}
else if(fName.length>14||fName.length<=4){
  alert("check first name");
    return false;
}
else if(e==false){
    alert("check the email address");
    return false;
}
else if(p==false){
    alert("check the contact number");
    return false;
}
else if(ps==false){
 
    alert("password should contain one uppercase,lowercase,special characters and numbers !!");
    return false;
}
else if(cpass!=pass){
  alert("Check the password");
  return false;
}
else{
    return true;
    rss.innerHTML="";
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
      stre.innerHTML="<span style='color:orange'>normal!</span>";
    }
    else{
      stre.innerHTML="<span style='color:red'>weak!</span>";
    }cno
  }
 
  function bov(){
    
    var ff=document.getElementById("fname");
    ff.style.border=black;
    ff.style.backgroundColor=white;
  }


