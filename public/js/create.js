function showFiles(){

let inputField=document.getElementById('input');
let file=inputField.files;
let fileReader= new FileReader;

fileReader.onload=function(event){
    let ImageURL=fileReader.result;
    $("#preview").attr("src",`${ImageURL}`)
}

fileReader.readAsDataURL(file[0])

}

function valid(){

    var title=document.getElementById("title").value;
    var te=document.getElementById("te").value;
    var input=document.getElementById("input").value;

    if(title==""||te==""||input==""){

        alert("all fields are mmandatory");
    }
    else{
        alert("SUCCESSFULLY CREATED");
    }

}