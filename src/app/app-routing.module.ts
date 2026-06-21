import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PrivacyPoliciesComponent} from "./privacy-policies/privacy-policies.component";
import {ContactUsEmailComponent} from "./contact-us-email/contact-us-email.component";
import {ContactUsMobileComponent} from "./contact-us-mobile/contact-us-mobile.component";
import {ScaffoldingComponent} from "./scaffolding/scaffolding.component";
import {LoginComponent} from "./login/login.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ProductsComponent} from "./modules/product/components/products/products.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'app', component: ScaffoldingComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'products' , loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
    ]},
  {path: 'contact-us', component: ContactUsComponent, children: [
      {path: 'email', component: ContactUsEmailComponent},
      {path: 'mobile', component: ContactUsMobileComponent},
    ]},
  {path: 'privacy-policies', component: PrivacyPoliciesComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
