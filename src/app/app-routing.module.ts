import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormData01Component } from './form-data01/form-data01.component';
import { FormData02Component } from './form-data02/form-data02.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'formdata01', component: FormData01Component},
  { path: 'formdata02', component: FormData02Component},
  { path: 'pricing', component: PricingComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  // Order is important, Angular with match the first path found. ** Will match any route, so it needs to be last
  // '/' is next to last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
