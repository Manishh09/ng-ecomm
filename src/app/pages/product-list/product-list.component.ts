import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

categories = ['electronics', 'books', 'clothing'];
selectedCategory = signal<string>('electronics');


ngOnInit(): void {
  this.getProductsByCategory();
}

onCategoryChange(category: string) {
  this.selectedCategory.set(category);
  this.getProductsByCategory();
}

productService = inject(ProductsService)
products = signal<Product[]>([]);



getProducts(){
  this.productService.getProducts().subscribe((products:Product[])=>{
    this.products.set(products);
  })
}

getProductsByCategory(){
  this.productService.getProductsByCategory('electronics').subscribe((products: any)=>{
    this.products.set(products);
  })
}


}
