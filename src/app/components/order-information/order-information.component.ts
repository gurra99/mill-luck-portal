import { Component } from '@angular/core';
import { OrderItemComponent } from './order-item/order-item.component';

@Component({
  selector: 'app-order-information',
  standalone: true,
  imports: [OrderItemComponent],
  templateUrl: './order-information.component.html',
  styleUrl: './order-information.component.scss',
})
export class OrderInformationComponent {}
