import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{HttpParams} from '@angular/common/http';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, ) {

   }
   getproducts(){
     return this.http.get("http://localhost:4000/products");
   }
   newProduct(item){

    return this.http.post("http://localhost:4000/insert",{"products":item})
    .subscribe(data=>{console.log(data)});
   }

   editProduct(_id)  {
    // console.log(id);
     
      // let params = new HttpParams();
      // params = params.append('_id', item);
     
     
  
  //this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })
  return this.http.get<any>('http://localhost:4000/readmore'+`/${_id}`);
  }
 
  // editProduct(item,id)
  // {
  //   return this.http.post('http://localhost:3000/api/update',{"product":item,"id":id})
  //   .subscribe(data=>{console.log(data)})
  // }

  deleteproductdata(id){
    return this.http.post("http://localhost:4000/delete",{"id":id})
    .subscribe(data=>{console.log(data)});
  }

  updateProduct(item,id)
  {
    console.log(item);
    return this.http.put<any>("http://localhost:4000/update"+`/${id}`,item)
    .subscribe(data=>{console.log(data)})
  }
}
