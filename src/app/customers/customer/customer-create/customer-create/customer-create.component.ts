import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../shared/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../../shared/customer.model';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerGroup: FormGroup;
  customerCreated = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private customerService: CustomerService) {
    this.customerGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
  }
  isInvalid(controlName: string) {
    const control = this.customerGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  isValid(controlName: string) {
    const control = this.customerGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

  back() {
    this.router.navigateByUrl('/customers');
  }

  closeAlert() {
    this.customerCreated = false;
  }

  save() {
    const values = this.customerGroup.value;
    const customer: Customer = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address
    };
    this.customerService.createCustomer(customer)
      .then(customer => {
        this.customerGroup.reset();
        this.customerCreated = true;
        setTimeout(() => {
          this.customerCreated = false;
        }, 3000);
      });
  }
}
