import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROOT_ROUTES } from './root-routes';

const html5Mode = true;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROOT_ROUTES, { useHash: html5Mode })
  ],
  exports: [
  	RouterModule
  ]
})
export class RoutesModule { }
