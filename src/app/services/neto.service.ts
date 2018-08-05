import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetoService {

  //netoUrl = 'https://davidd.neto.com.au/do/WS/NetoAPI';
  netoUrl = 'http://localhost:3000/neto/';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.netoUrl + 'app/orders');
  }

  dispatchOrder(order) {
    return this.http.put(this.netoUrl + 'app/dispatchorder', order);
  }

}
