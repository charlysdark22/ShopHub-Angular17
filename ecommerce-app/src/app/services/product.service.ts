import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { mergeMap, toArray, switchMap } from 'rxjs/operators';

const API = 'https://fakestoreapi.com';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    // Obtiene todos los productos y luego para cada producto obtiene su detalle
    return this.http.get<any[]>(`${API}/products`).pipe(
      switchMap((products) => from(products)),
      mergeMap((p: any) => this.http.get(`${API}/products/${p.id}`)),
      toArray()
    );
  }

  getProduct(id: number) {
    return this.http.get(`${API}/products/${id}`);
  }
}
