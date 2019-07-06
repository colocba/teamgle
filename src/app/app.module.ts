import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CoverPictureComponent } from './cover-picture/cover-picture.component';
import { ForWhoComponent } from './for-who/for-who.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhatWeDoComponent,
    HowItWorksComponent,
    CoverPictureComponent,
    ForWhoComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
