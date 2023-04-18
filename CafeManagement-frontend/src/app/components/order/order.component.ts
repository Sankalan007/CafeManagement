import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Order from 'src/app/model/Order';
import Orders from 'src/app/model/Orders';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ShareddataService } from 'src/app/services/sharedData/shared-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  userDetails!: any;
  newOrderForm!: FormGroup;
  order: Order[] = [];
  selectedOrderType: string = '';
  selectedPaymentMethod: string = '';
  items!: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private orderService: OrderService,
    private authService: AuthService,
    private sharedDataService: ShareddataService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.sharedDataService.userDetailsObservable.subscribe((userDetails) => {
      this.userDetails = userDetails;
    });
    this.newOrderForm = this.fb.group({
      food: [''],
      quantity: [''],
      orderType: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
    this.getProducts();
  }

  addFood() {
    const currentOrder = this.newOrderForm.value;
    this.newOrderForm = this.fb.group({
      food: [''],
      quantity: [''],
      orderType: [this.selectedOrderType, Validators.required],
      paymentMethod: [this.selectedPaymentMethod, Validators.required],
    });

    const foodAndPrice = currentOrder.food;
    const [food, pr] = foodAndPrice.split(' - ');
    const price = parseFloat(pr).toFixed(2);
    const quantity = currentOrder.quantity;
    const singleOrder: Order = {
      name: food,
      price: price.toString(),
      quantity: quantity.toString(),
      total: (parseFloat(price) * quantity).toFixed(2),
    };

    this.order.push(singleOrder);
  }

  calculateSubtotal(): string {
    const sumTotal = this.order.reduce((acc, order) => {
      return acc + parseFloat(order.total);
    }, 0);
    return sumTotal.toFixed(2);
  }

  onOrderTypeChange(event: any) {
    this.selectedOrderType = event.target.value;
  }

  onPaymentMethodChange(event: any) {
    this.selectedPaymentMethod = event.target.value;
  }

  submitOrder() {
    if (this.order.length === 0) {
      this.toastr.warning(
        'You did not add any food item',
        'Please add some food options'
      );
    } else {
      const orders: Orders = {
        createdBy: this.userDetails[0].userName.toString(),
        email: this.userDetails[0].email.toString(),
        firstName: this.userDetails[0].firstName.toString(),
        lastName: this.userDetails[0].lastName.toString(),
        orderType: this.selectedOrderType.toString(),
        paymentMethod: this.selectedPaymentMethod.toString(),
        productDetail: JSON.stringify(this.order),
        totalAmount: this.calculateSubtotal().toString(),
      };
      // console.log(orders);
      this.order = [];
      this.newOrderForm = this.fb.group({
        food: [''],
        quantity: [''],
        orderType: ['', Validators.required],
        paymentMethod: ['', Validators.required],
      });
      this.orderService.addBill(orders).subscribe(
        (res: any) => {
          // console.log(res);
        },
        (error: HttpErrorResponse) => {
          // console.log(error.message);
        }
      );
    }
  }

  getProducts() {
    this.menuService.getProducts().subscribe(
      (res: any) => {
        // console.log(res);
        this.items = res;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
