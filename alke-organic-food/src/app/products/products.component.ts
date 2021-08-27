
import { CartService } from './../services/cart.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: Products[] = []; 
  cartItems: Array<Products> = [];

  constructor(private _productService: ProductsService, private _cartService: CartService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result => {
      console.log(result);
      this.products = result;
    }, (error) => { console.log(error) });
  }

  
  // addToCart(product){
  //   alert("Order added to cart successfully");
  //   this._cartService.addItem(product);
  // }

}
