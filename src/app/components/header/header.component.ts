import { Component, computed, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal('Angular Store')
  

  cartService = inject(CartService)

  buttonLabel = computed(() => `Cart (${this.cartService.cart().length})`)

  showButtonClicked() {
    console.log("button clicked");

  }
}
