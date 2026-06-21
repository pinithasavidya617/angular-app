import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyComponent } from './body/body.component';
import {ProductModule} from "./modules/product/product.module";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsEmailComponent } from './contact-us-email/contact-us-email.component';
import { ContactUsMobileComponent } from './contact-us-mobile/contact-us-mobile.component';
import { ScaffoldingComponent } from './scaffolding/scaffolding.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    BodyComponent,
    ContactUsComponent,
    PrivacyPoliciesComponent,
    LoginComponent,
    DashboardComponent,
    ContactUsEmailComponent,
    ContactUsMobileComponent,
    ScaffoldingComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
