import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InfoSectionComponent } from './Components/Home/info-section/info-section.component';
import { ProductSectionComponent } from './Components/Home/product-section/product-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoSectionComponent,
    ProductSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
