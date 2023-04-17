import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Order from 'src/app/model/Order';
import Orders from 'src/app/model/Orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  newOrderForm!: FormGroup;
  order: Order[] = [];
  selectedOrderType: string = '';
  selectedPaymentMethod: string = '';

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.newOrderForm = this.fb.group({
      food: [''],
      quantity: [''],
      orderType: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
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
    const [food, pr] = foodAndPrice.split(' (');
    const price = parseFloat(parseFloat(pr.slice(0, -1)).toFixed(2));
    const quantity = currentOrder.quantity;
    const singleOrder: Order = {
      name: food,
      price: price,
      quantity: quantity,
      total: parseFloat((price * quantity).toFixed(2)),
    };

    this.order.push(singleOrder);
  }

  calculateSubtotal(): number {
    const sumTotal = this.order.reduce((acc, order) => {
      return acc + order.total;
    }, 0);
    return parseFloat(sumTotal.toFixed(2));
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
        createdBy: 'sankalan.chanda312@gmail.com',
        email: 'sankalan.chanda312@gmail.com',
        firstName: 'Sankalan',
        lastName: 'Chanda',
        orderType: this.selectedOrderType,
        paymentMethod: this.selectedPaymentMethod,
        productDetail: this.order,
        totalAmount: this.calculateSubtotal(),
      };
      console.log(orders);
      this.order = [];
      this.newOrderForm = this.fb.group({
        food: [''],
        quantity: [''],
        orderType: ['', Validators.required],
        paymentMethod: ['', Validators.required],
      });
    }
  }
}
