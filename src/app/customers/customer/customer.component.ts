import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../shared/customer.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input()
  customer: Customer;

  constructor() {
  }

  ngOnInit() {
  }

  customerDetails(customer: Customer) {
    
  }
}
