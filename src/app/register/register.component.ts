import { Component, OnInit } from '@angular/core';
import{RegisterModel} from './register.model';
import{RegService}from '../reg.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  RegisterItem=new RegisterModel('null','null','null','null','null');

  constructor(private registerservice:RegService, private router:Router, private fb:FormBuilder) { }


  regForm=this.fb.group({
 
    username:['',[Validators.required,Validators.minLength(4),Validators.email]],
password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
 firstname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(14)]],
lastname:['',Validators.required],
 contactno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

})

get username(){

return this.regForm.get('username');

}


get password(){

return this.regForm.get('password');

}

get firstname(){

return this.regForm.get('firstname');


}

get lastname(){

return this.regForm.get('lastname');


}

get contactno(){

return this.regForm.get('contactno');


}

  ngOnInit(): void {
  }
 AddUser(){
    this.registerservice.newUser(this.RegisterItem);
    console.log("calles");
    alert("sucess");
    this.router.navigate(['/']);
     }

}
