import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

//routes array
const routes : Routes =[
  {path:'home',component:HomeComponent,title:"Home - joe's robot shop"},
  {path:'catalog',component:CatalogComponent,title:"Catalog - joe's robot shop"},
  {path:'cart',component:CartComponent,title:"Cart- joe's robot shop"},
  {path:'sign-in',component:SignInComponent,title:"sign in- joe's robot shop"},
  {path:'', redirectTo : '/home',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
