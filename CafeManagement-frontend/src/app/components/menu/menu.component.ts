import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items!: any;
  showFoodForm: boolean = false;
  addItemForm!: FormGroup;
  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.getProducts();
  }

  toggleFoodForm() {
    this.showFoodForm = !this.showFoodForm;
  }

  getRole(): boolean {
    return this.authService.getRole();
  }
  getProducts() {
    this.menuService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.items = res;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  addProduct(product: any) {
    this.showFoodForm = !this.showFoodForm;
    this.menuService.addProduct(product).subscribe(
      (res: any) => {
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        this.getProducts();
        console.log(error.message);
      }
    );
  }
}
