import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@core/components';
import { MainComponent } from './main';
import { HomeComponent } from './home/home';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
  	MainComponent,
  	HomeComponent
  ]
})
export class MainModule { }
