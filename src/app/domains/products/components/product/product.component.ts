import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/Models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [CommonModule,ReversePipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;

  @Output() addToCart = new EventEmitter(); 

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
