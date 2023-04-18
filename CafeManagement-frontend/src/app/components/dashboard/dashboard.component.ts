import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allOrders!: any;
  menuItems!: any;
  constructor(private orderService: OrderService,private menuService:MenuService) {}
  ngOnInit(): void {
    this.getAllBills();
    this.getAllMenuItems();
  }
  getAllMenuItems(){
    this.menuService.getProducts().subscribe(
      (res: any) => {
        this.menuItems=res;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }
  getAllBills() {
    this.orderService.getAllBills().subscribe(
      (res: any) => {
        this.allOrders = res.map((order: any) => {
          order.productDetail = JSON.parse(order.productDetail);
          return order;
        });
        // console.log(this.allOrders);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
