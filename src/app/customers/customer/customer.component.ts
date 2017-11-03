import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../shared/customer.model';
import {Router} from '@angular/router';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[];
  constructor(private router: Router,
              public customerService: CustomerService) {
    this.customerService.getCustomers().then(
      (customers) => {
        console.log(customers);
        this.customers = customers;
      }
    );
  }

  ngOnInit() {
  }

  customerDetails(id) {
   this.router
      .navigate(['/customers/', id, 'products']);
  }

  createCustomer() {
    this.router
      .navigateByUrl('/customers/create');
  }
}
