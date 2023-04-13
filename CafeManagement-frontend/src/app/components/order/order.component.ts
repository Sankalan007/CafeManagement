import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  newOrderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newOrderForm = this.fb.group({
      food: ['', Validators.required],
      quantity: ['', Validators.required],
      specialInstructions: [''],
      paymentMethod: ['', Validators.required],
    });
  }

  submitOrder() {}
}
