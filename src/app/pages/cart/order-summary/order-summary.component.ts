import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { ButtonComponent } from "../../../components/button/button.component";
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [CurrencyPipe, PrimaryButtonComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

  cartService = inject(CartService);
  totalIems = computed(() => this.cartService.cart().length);
  totalPrice = computed(() => this.cartService.cart().reduce((acc, item) => acc + item.price, 0));

  handleCheckout() {
    console.log('Checkout button clicked')
  }
}
