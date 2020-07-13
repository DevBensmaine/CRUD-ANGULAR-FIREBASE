import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrdersService } from "./shared/orders.service";
import { ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
