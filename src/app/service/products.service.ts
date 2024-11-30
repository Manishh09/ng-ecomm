import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  #http = inject(HttpClient)
  #API_URL = 'https://fakestoreapi.com';


  getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>(`${this.#API_URL}/products`);
  }

  getProductById(id: number) {
    return this.#http.get(`${this.#API_URL}/products/${id}`)
  }

  getCategories() {
    return this.#http.get(`${this.#API_URL}/products/categories`)
  }

  getProductsByCategory(category: string) {
    return this.#http.get(`${this.#API_URL}/products/category/${category}`)
  }
}
