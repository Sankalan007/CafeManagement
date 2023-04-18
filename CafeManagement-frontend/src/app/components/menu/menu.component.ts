import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items!: any;
  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getProducts();
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
    this.menuService.addProduct(product).subscribe(
      (res: any) => {
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
