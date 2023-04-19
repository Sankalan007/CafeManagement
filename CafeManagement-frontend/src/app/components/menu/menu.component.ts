import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @ViewChild('editModal') editM: any;
  @ViewChild('deleteModal') deleteModal: any;

  item!: any;
  deleteItem!: any;
  items!: any;
  showFoodForm: boolean = false;
  addItemForm!: FormGroup;
  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private fb: FormBuilder,
    private modalService: NgbModal
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
        // console.log(res);
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
        // console.log(error.message);
      }
    );
  }

  updateProduct(product: any, id: number) {
    product.id = id;
    const item: any = {
      id: id,
      name: product.name,
      description: product.description,
      price: product.price,
    };
    console.log(item);

    this.menuService.updateProduct(item).subscribe(
      (res: any) => {
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        this.getProducts();
      }
    );
    this.closeEditModal();
  }

  deleteProduct(id: number) {
    this.menuService.deleteProduct(id).subscribe(
      (res: any) => {
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        this.getProducts();
      }
    );
    this.closeDeleteModal();
  }

  openEditModal(item: any) {
    this.item = item;
    this.modalService.open(this.editM);
  }

  closeEditModal() {
    this.modalService.dismissAll();
  }

  openDeleteModal(item: any) {
    this.deleteItem = item;
    this.modalService.open(this.deleteModal);
  }

  closeDeleteModal() {
    this.modalService.dismissAll();
  }
}
