import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  //user defined datatype
  product:IProduct;

  //create constructor and initial product property
  constructor(){
    this.product = {
      id:2,
      description:"this is a test value",
      name:"test name",
      imageName:"head-friendly.png",
      category:"heads",
      price:945.045435,
      discount:0.2,
    };
  }

  getImageUrl(product:IProduct)
  {

       return '../../assets/images/robot-parts/'+ product.imageName;
  }

}
