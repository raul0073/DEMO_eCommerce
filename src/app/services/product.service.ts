import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) {}

  // function to get products for boxes
  getProductsForBox(): Observable<any[]>{
    return this.http.get<any>('https://dummyjson.com/products')
  }

  getOneProductForBox(id: string): Observable<any[]> {
    return this.http.get<any>('https://dummyjson.com/products/' + id)
  }
}
