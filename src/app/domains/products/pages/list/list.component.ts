import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/Models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  imports: [ProductComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products= signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        creaionAt:new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creaionAt:new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=15',
        creaionAt:new Date().toDateString(),
      },
    ];
    this.products.set(initProducts);
  }
  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log(event);
  }
}
