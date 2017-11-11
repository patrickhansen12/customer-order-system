import { Injectable } from '@angular/core';
import {Customer} from './customer.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export const imagesArray = [
  'https://i.imgur.com/oFdThdF.jpg',
  'http://denoffentlige.dk/sites/default/files/arne_eggert.jpg',
  'https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg',
  'https://bt.bmcdn.dk/media/cache/resolve/image_540x303/image/86/864553/12904709-071seulrik-wilbek4-175931jpg.jpeg',
  'http://fiskesaeson.dk/wp-content/uploads/2015/02/DSCN3536-1024x768.jpg',
  'https://bt.bmcdn.dk/media/cache/resolve/image_1240/image/22/227375/4467652-jesper-petersen-sf.jpg'
]

const url = environment.apiEndpoint + '/customers';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {}

  get(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(url);
  }

  getById(id: number): Observable<Customer> {
    return this.http
      .get<Customer>(url + '/' + id);
  }

  delete(id: number): Observable<Customer> {
    return this.http
      .delete<Customer>(url + '/' + id);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http
      .post<Customer>(url, customer);
  }
}
