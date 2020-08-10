import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../products/products.model';
import{ProductService} from '../product.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
 title:'addproduct';
  constructor(private productservice:ProductService,private router: Router) { }
  ProductItem=new ProductModel(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
 AddProduct(){
this.productservice.newProduct(this.ProductItem);
console.log("calles");
alert("sucess");
this.router.navigate(['/']);
 }
}
