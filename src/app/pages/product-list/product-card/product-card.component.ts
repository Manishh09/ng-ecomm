import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  cartService = inject(CartService)

  product = input.required<Product>()


}
