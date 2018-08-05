import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private http: HttpClient) { }

  url = 'https://82e2997c.ngrok.io/shopify/app/';

  getToken() {
    return this.http.get(this.url);
  }

  getOrders() {
    return this.http.get(this.url + 'orders');
  }
}
