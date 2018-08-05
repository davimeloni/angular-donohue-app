import { Component, OnInit } from '@angular/core';
import { NetoService } from '../../services/neto.service';

@Component({
  selector: 'app-neto-dashboard',
  templateUrl: './neto-dashboard.component.html',
  styleUrls: ['./neto-dashboard.component.css']
})
export class NetoDashboardComponent implements OnInit {

  netoOrders: any;
  toggle: any = {};
  fullFillWithAliItem: any;
  
   contactName;
   country;
   address1;
   address2;
   state;
   city;
   zip;
   mobile_code;
   mobile_number;
  aliTestUrl = `https://shoppingcart.aliexpress.com/order/confirm_order.htm?objectId=32839398012&
  from=aliexpress
  &countryCode=AU
  &shippingCompany=CPAM
  &provinceCode=
  &cityCode=
  &promiseId=
  &itemCondition=
  &aeOrderFrom=main_detail
  &skuAttr=14%3A193%3B5%3A100014064
  &skucustomAttr=
  &quantity=1`;

  constructor(private netoService: NetoService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.netoService.getOrders()
      .subscribe((data: any) => {
        this.netoOrders = data.Order;
        console.log(this.netoOrders);
      });
  }

  fullfilWithAli(order, item) {
    console.log(order);
    //console.log(item);
    this.aliTestUrl = `https://shoppingcart.aliexpress.com/order/confirm_order.htm?objectId=32839398012&from=aliexpress&countryCode=AU&shippingCompany=CPAM&provinceCode=&cityCode=&promiseId=&itemCondition=&aeOrderFrom=main_detail&skuAttr=14%3A193%3B5%3A100014064&skucustomAttr=&quantity=1&contactName=${encodeURIComponent(order.ShipFirstName + ' ' + order.ShipLastName)}&country=${order.ShipCountry}&address1=${encodeURIComponent(order.ShipStreetLine1)}&address2=${encodeURIComponent(order.ShipStreetLine2)}&state=${encodeURIComponent(order.ShipState)}&city=${encodeURIComponent(order.ShipCity)}&zip=${order.ShipPostCode}&mobilecode=${61}&mobile=${encodeURIComponent(order.ShipPhone)}`;

    console.log(this.aliTestUrl);
    window.open(this.aliTestUrl);
  }

  dispatchOrder(order) {
    let dispatchedOrder = {
      "Order": {
        "OrderID": order.OrderID,
        "OrderStatus": "Dispatched"
      } 
    }
    /*N11286*/
    this.netoService.dispatchOrder(dispatchedOrder)
      .subscribe((response: any) => {
        window.location.reload();
        alert(response.Order.OrderID +  " dispatched");
        console.log(response.Order.OrderID);
      });
  }

}
