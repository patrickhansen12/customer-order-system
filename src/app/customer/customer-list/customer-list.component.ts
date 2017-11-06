import { Component, OnInit } from '@angular/core';
import {Customer} from '../shared/customer.model';
import {CustomerService} from '../shared/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers: Customer[];

  customerFromAppComponent: Customer;
  constructor(private customerService: CustomerService, private router:Router) {

  }

  ngOnInit() {
    // Ask for a bunch of code to execute
   this.customerService.get()
    // Executing and explaining when done let me know
      .subscribe(
        customers => {
          this.customers = customers;

        }
      );
  }
details(customer: Customer){
    this.router.navigateByUrl('/customer' + customer.id);
}
}

