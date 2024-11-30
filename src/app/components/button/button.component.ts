import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  label = input<string>();

  buttonClicked = output();

  handleButtonClick() {
    this.buttonClicked.emit()
  }
}