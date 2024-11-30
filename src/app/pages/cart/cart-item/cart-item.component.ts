import { Component, input, signal } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartItem = input<Product>()

  cartItems = signal([...[], this.cartItem()])
}
