import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { QandaComponent } from './qanda/qanda.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'pricing', component: PricingComponent },
  { path: 'qanda', component: QandaComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
