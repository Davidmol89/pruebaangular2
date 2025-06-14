import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/Models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/Models/category.model';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [RouterLinkWithHref,ProductComponent,CommonModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products= signal<Product[]>([]);
  categories= signal<Category[]>([]);

  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)

  @Input() category_id? : string;

  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(changes:SimpleChanges){
    this.getProducts();
  }

  addToCard(product: Product) {
    this.cartService.addToCart(product)
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next:(products)=>{
        this.products.set(products);
      },
      error: () =>{
        
      }
    })
  }
    private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next:(data)=>{
        this.categories.set(data);
      },
      error: () =>{
        
      }
    })
  }
}
