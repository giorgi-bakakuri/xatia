import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'producte', component: ProductsComponent, title: 'products' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: 'aboutus', component: AboutComponent, title: 'about us' },
  { path: 'map', component: MapComponent, title: 'map' },
  { path: 'productdetail/:id', component: ProductdetailComponent, title: 'productdetail' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
