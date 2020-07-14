import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  coffeeOrderList = [];

  constructor(private ordersService: OrdersService) {}

  getCoffeeOrders = () =>
    this.ordersService
      .getCoffeeOrders()
      .subscribe((res) => (this.coffeeOrderList = res));

  markCompleted = (data) => {
    console.log(data)
    this.ordersService.updateCoffeeOrder(data);
  }

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);

  ngOnInit(): void {
    this.getCoffeeOrders();
  }
}
