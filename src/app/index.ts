import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes';
import { AccessModule } from './modules/access';
import { AppComponent } from './app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    AccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
