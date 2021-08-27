import { InvoiceComponent } from './invoice/invoice.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'cart/:id', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'invoice', component: InvoiceComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
