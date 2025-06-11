import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/Models/product.model';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;

  @Output() addToCart = new EventEmitter(); 

  addToCartHandler() {
    console.log('Add to cart clicked');
    this.addToCart.emit('hola este es un msg desde un hijo' + this.product.title);
  }
}
