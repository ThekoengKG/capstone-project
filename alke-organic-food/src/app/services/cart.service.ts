import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];

  constructor() { }

  addItem(addedItem){
    this.cartItems.push(addedItem);
    console.log(this.cartItems);
    this.storeToLocalStorage();
  }

  storeToLocalStorage(){
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadCartItems(){
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? [];
    return this.cartItems;
  }

  clearCartItems(){
    localStorage.removeItem('cartItems');
    if(!localStorage.getItem('cartItems')){
      return true;
    }
    return false;
  }

}
