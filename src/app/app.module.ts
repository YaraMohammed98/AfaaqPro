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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LanguageInterceptors } from './interceptors/language.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide:TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LanguageInterceptors,
    multi:true
}, 
HttpClient
],
  bootstrap: [AppComponent]
})
export class AppModule { }
