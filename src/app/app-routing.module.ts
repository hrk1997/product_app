import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import{NewproductComponent} from './newproduct/newproduct.component';
import{LoginComponent}from './login/login.component';
import{RegisterComponent} from './register/register.component';
import{EditComponent} from './edit/edit.component';
import { from } from 'rxjs';


const routes: Routes = [{path:'',component:ProductsComponent},{path:'products',component:ProductsComponent},{path:'readmore/:id',component:EditComponent},{path:'add',component:NewproductComponent},{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
