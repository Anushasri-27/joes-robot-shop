import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  //user defined datatype
  products: IProduct[] = [];
  filter: string = '';

  //create constructor and initial product property
  constructor(private cartService: CartService, private productSvs: ProductService) {

  }

  ngOnInit() {

      this.productSvs.getProduct().subscribe(products => {
      this.products = products;
    })

  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }

  getFilteredProduct() {
    return this.filter === ''
      ? this.products
      : this.products.filter((prod) => prod.category === this.filter);
  }
}
