import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InfoSectionComponent } from './Components/Home/info-section/info-section.component';
import { ProductSectionComponent } from './Components/Home/product-section/product-section.component';
import { GalleryComponent } from './Components/Home/gallery/gallery.component';
import { NewsComponent } from './Components/Home/news/news.component';
import { PartenersComponent } from './Components/Home/parteners/parteners.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ContactUsComponent } from './Components/Home/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Components/Home/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoSectionComponent,
    ProductSectionComponent,
    GalleryComponent,
    NewsComponent,
    PartenersComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
