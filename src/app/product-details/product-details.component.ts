import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter()

  getImageUrl(prod: IProduct) {
    if (!prod) return '';
    return '../../assets/images/robot-parts/' + prod.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();

  }
  getDiscountedPrice(product: any) {
    return { strikethrough: product.discount > 0 };
  }

}
