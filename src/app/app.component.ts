import { Component } from '@angular/core';
import {Customer } from './customer/shared/customer.model';
import {CustomerService} from './customer/shared/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customers: Customer[];

  customerFromAppComponent: Customer;
  constructor(private customerService: CustomerService) {
    customerService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
      }
    );
  }
}
