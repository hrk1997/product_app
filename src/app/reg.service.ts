import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http:HttpClient) { }

  newUser(item){

      return this.http.post("http://localhost:5000/register",{"user":item})
      .subscribe(data=>{console.log(data)});

  }


}
