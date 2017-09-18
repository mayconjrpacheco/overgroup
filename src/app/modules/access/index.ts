import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccessComponent } from './access';
import { SigninComponent } from './signin/signin';
import { SignupComponent } from './signup/signup';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AccessComponent, SigninComponent, SignupComponent]
})
export class AccessModule { }
