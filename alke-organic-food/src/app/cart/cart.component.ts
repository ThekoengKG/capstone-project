import { Products } from './../models/products';
import { ProductsService } from './../services/products.service';
import { Item } from './../models/item';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  id: any;
  productAdded: Products = new Products();
  public items: Item[] = [];
  public total: number = 0;


  constructor(private _cartService: CartService, private _router: Router, private _route: ActivatedRoute, private _productService: ProductsService) { };

  ngOnInit(): void {
    
 
    this.id = this._route.snapshot.paramMap.get('id');
    this._productService.getProductById(this.id).subscribe(result => {
    this.productAdded = result;
      var item: Item = {
        product: this.productAdded,
        quantity: 1
      }
      console.log(item);
      if(localStorage.getItem('cart') == null){
         let cart: any = [];
         cart.push(JSON.stringify(item));
         localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for(var i =0; i < cart.length; i++){
           let item: Item = JSON.parse(cart[i]);
           if(item.product._id == this.id) {
             index = i;
             break;
           }
         }
         if(index == -1){
           cart.push(JSON.stringify(item));
           localStorage.setItem('cart', JSON.stringify(cart));
         } else {
           let item: Item =JSON.parse(cart[index]);
           item.quantity += 1;
           cart[index] = JSON.stringify(item);
           localStorage.setItem('cart', JSON.stringify(cart));
         }
       }
     this.loadCart();
     }) 
  }

   loadCart(){
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for(var i =0; i < cart.length; i++){
      let item = JSON.parse(cart[i]);
      this.cartItems.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  // cartEmpty(){
  //   this._cartService.clearCartItems();
  //   alert("Cart is cleared now");
  //   this._router.navigate(['/products']);
  // }

  // removeCartItem(id) {
  //   for(var i =0; i < this.cartItems.length; i++){
  //     let item = this.cartItems[i];
  //     if(item.id == id) {
  //       this.cartItems.splice(i, 1);
  //       break;
  //     }
  //   }
  //   localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
  // }


}
