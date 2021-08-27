import { Products } from './../models/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this._httpClient.get<Products[]>(`http://localhost:3000/products`);
  }

  getProductById(id: number): Observable<Products>{
    return this._httpClient.get<Products>(`http://localhost:3000/products/${id}`);
  }

}
