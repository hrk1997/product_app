import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service';
import{editModel} from './edit.model';
import { Router } from '@angular/router';
import{ProductModel}from'../products/products.model';
import {ActivatedRoute} from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
 
})
export class EditComponent implements OnInit {
  
 products=new ProductModel(null,null,null,null,null,null,null,null);
 id='';
 productItem=<any>('');
  constructor(private productService:ProductService, private route:ActivatedRoute, private router:Router) { }
  // productItem=new ProductModel(null,null,null,null,null,null,null,null);
  
  
  private sub:any;

  ngOnInit(): void {
 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
     });
      
      this.productService.editProduct(this.id).subscribe((data)=>{
        this.products=JSON.parse(JSON.stringify(data));
        console.log("Placed");
        console.log(this.products);
        
       })
    }
    // getproduct(){
    //   this.productService.getproduct(this.sub).subscribe(data=>{
    //     console.log(data);
    //   })
    // }

// this.productService.getproduct(this._id).subscribe((data)=>{
//   var productsdata=JSON.parse(JSON.stringify(data));
//   console.log(productsdata);
//   this.productItem.ProductId=productsdata.productId;
//   this.productItem.ProductName=productsdata.productName;
//   this.productItem.ProductCode=productsdata.productCode;
//   this.productItem.description=productsdata.description;
//   this.productItem.releaseDate=productsdata.releaseDate;
//   this.productItem.price=productsdata.price;
//   this.productItem.starrating=productsdata.starRating;
//   this.productItem.imageUrl=productsdata.imageUrl;
  
//   console.log(productsdata.productName);
   
//  })

update(){

  console.log(this.id);
this.productService.updateProduct(this.products,this.id);
console.log("Called");
alert("success");

this.router.navigate(['/']);
}
}


// getProduct(id){
   
//   console.log(id);
//   console.log(name)
//   this.productservice.getproduct(id).subscribe((data)=>{
//     this.products=JSON.parse(JSON.stringify(data));
//     console.log(data);
//   })
//   console.log("call");
//   // location.reload();ng 

// 
