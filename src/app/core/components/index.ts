import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button';
import { NavbarComponent } from './navbar/navbar';
import { ModalComponent } from './modal/modal';
import { SidebarComponent } from './sidebar/sidebar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	ButtonComponent,
  	NavbarComponent,
  	ModalComponent,
    SidebarComponent
  ],
  exports: [
  	ButtonComponent,
  	NavbarComponent,
  	ModalComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
