import { Products } from './../models/products';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  product: Products = new Products;

  constructor(private _productService: ProductsService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this._route.snapshot.paramMap.get('id');
    // this._productService.getProductById(this.id).subscribe(result => {
    //   console.log(result);
    //   this.product= result;
    // }, error => { console.log(error) });
  }

}
