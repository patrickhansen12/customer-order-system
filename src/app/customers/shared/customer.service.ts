import { Injectable } from '@angular/core';
import {Customer} from './customer.model';

import {Http} from '@angular/http';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http
      .get('http://localhost:56633/api/customers').toPromise().then(resp => resp.json() as Customer[]);
  }
}
