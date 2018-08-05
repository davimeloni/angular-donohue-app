import { Component, OnInit } from '@angular/core';
import { ShopifyService } from '../../services/shopify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders = {};
  items = [];

  constructor(private shopifyService: ShopifyService) { }

  ngOnInit() {
    this.getOrders();
    this.getToken();
  }

  // for orders;
  // for items in order;
  // if item.fulfill == dropshipping
  // then adds to tablelist;

  getToken() {
    this.shopifyService.getToken()
      .subscribe((data) => {
        console.log(data);
      });
  }

  getOrders() {
    this.shopifyService.getOrders()
      .subscribe((data) => {
        this.orders = data;
        //data.orders is throwing error
        this.items = this.orders[0].line_items
        console.log(this.items);
      });
  }

}
