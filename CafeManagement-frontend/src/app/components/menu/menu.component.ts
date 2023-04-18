import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onAddMenu(_t45: NgForm) {
    throw new Error('Method not implemented.');
  }
  searchMenu(arg0: any) {
    throw new Error('Method not implemented.');
  }
  public onOpenModal(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeemodal');
    }

    container?.appendChild(button);
    button.click();
  }
}
