import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    ContactComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    AdminDashboardComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
