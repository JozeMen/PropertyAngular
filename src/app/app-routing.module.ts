import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'property',
      loadChildren: () =>
        import('./pages/property/property.module').then((m) => m.PropertyModule),
    },
    {
      path: 'person',
      loadChildren: () =>
        import('./pages/person/person.module').then((m) => m.PersonModule),
    },
    // {
    //   path: 'payment',
    //   loadChildren: () =>
    //     import('./pages/payment/payment.module').then((m) => m.PaymentModule),
    // },
    // {
    //   path: 'receipt',
    //   loadChildren: () =>
    //     import('./pages/receipt/receipt.module').then((m) => m.ReceiptModule),
    // },
    // {
    //   path: 'company',
    //   loadChildren: () =>
    //     import('./pages/company/company.module').then((m) => m.CompanyModule),
    // },
  ],
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


