import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  cartService = inject(CartService)

  cartItem = input<Product>({} as Product);




}
