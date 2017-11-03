import {Injectable} from '@angular/core';
import {Customer} from './customer.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {environment} from "../../../environments/environment";


@Injectable()
export class CustomerService {
  url: string = environment.apiEndpoint;
  constructor(
    private http: Http
  ) {
  }

  getCustomers(): Promise<Customer[]> {
    return this.http
      .get(`${this.url}/customers`).toPromise()
      .then(response => response.json() as Customer[]);
  }

  createCustomer(customer: Customer):Promise<Customer> {
    return this.http
      .post( `${this.url}/customers`, customer)
      .toPromise()
      .then( res =>  res.json() as Customer);
  }
}
