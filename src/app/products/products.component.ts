import { Component, OnInit } from '@angular/core';
import {ProductModel} from './products.model';
import{ProductService} from '../product.service';
  import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  title:String="PRODUCT LIST";

  products: ProductModel[];

  imageWidth: number=50;
  imageMargin: number=2;

showImage:boolean=false;

  constructor(private productservice:ProductService, private router:Router){}


toggleImage():void{
  this.showImage=!this.showImage;
}

  ngOnInit(): void {
this.productservice.getproducts().subscribe((data)=>{

  this.products=JSON.parse(JSON.stringify(data));












})

  }

  deleteProduct(id){

    console.log(id);
    this.productservice.deleteproductdata(id);
    console.log("called");
    location.reload();
  }

  readmore(id){
    console.log(id);
    this.router.navigate(['/readmore',id]);
  }
  
  

}
