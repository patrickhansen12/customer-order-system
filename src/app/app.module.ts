import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer/customer.component';
import {CustomerService} from './customers/shared/customer.service';
import { RouterModule, Routes} from '@angular/router';
import { ProductsComponent } from './customers/products/products.component';
import { OrdersComponent } from './customers/orders/orders.component';
import { CustomerCreateComponent } from './customers/customer/customer-create/customer-create/customer-create.component';
import {HttpClient} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'customers/:id/products',
    component: ProductsComponent },
  { path: 'customers',
    component: CustomerComponent },
  { path: 'orders',
    component: OrdersComponent },
  { path: 'customers/create', component:CustomerCreateComponent},
    { path: '',
    pathMatch: 'full',
    redirectTo: '/customers'
  },
  { path: '*',
    redirectTo: '/customers'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductsComponent,
    OrdersComponent,
    CustomerCreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  entryComponents: [
    CustomerComponent
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
