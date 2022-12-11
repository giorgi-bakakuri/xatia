import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { HoverDirective } from './hover.directive';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FooterComponent } from './footer/footer.component';
import { ScrolDirective } from './scrol.directive';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MapComponent,
    HoverDirective,
    ProductdetailComponent,
    FooterComponent,
    ScrolDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
