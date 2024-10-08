import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    private cartService: CartService,
    private productSvs: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvs.getProduct().subscribe((products) => {
      this.products = products;
    });

     this.route.queryParams.subscribe((params)=>{
           this.filter=params['filter'] ?? '';
     })

  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProduct() {
    return this.filter === ''
      ? this.products
      : this.products.filter((prod) => prod.category === this.filter);
  }
}
