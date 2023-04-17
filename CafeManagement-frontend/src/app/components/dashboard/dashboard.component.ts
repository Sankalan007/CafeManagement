import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allOrders!: any;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getAllBills();
  }

  getAllBills() {
    this.orderService.getAllBills().subscribe(
      (res: any) => {
        this.allOrders = res.map((order: any) => {
          order.productDetail = JSON.parse(order.productDetail);
          return order;
        });
        console.log(this.allOrders);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
