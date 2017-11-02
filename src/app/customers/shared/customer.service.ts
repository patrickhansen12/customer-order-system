import { Injectable } from '@angular/core';
import {Customer} from './customer.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get('http://localhost:56633/api/customers')
      .map(resp => resp.json() as Customer[]);
  }
}
