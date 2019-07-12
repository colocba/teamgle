import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CoverPictureComponent } from './cover-picture/cover-picture.component';
import { ForWhoComponent } from './for-who/for-who.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { AppRoutingModule } from './app-routing.module';
import { QandaComponent } from './qanda/qanda.component';
import { QandaAccordionComponent } from './qanda-accordion/qanda-accordion.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhatWeDoComponent,
    HowItWorksComponent,
    CoverPictureComponent,
    ForWhoComponent,
    ContactUsComponent,
    FooterComponent,
    PricingComponent,
    HomeComponent,
    PricingTableComponent,
    QandaComponent,
    QandaAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
