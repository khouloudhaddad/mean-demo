import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CountdownComponent } from './countdown/countdown.component';
import { MenuComponent } from './menu/menu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChefsComponent } from './chefs/chefs.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BookTableComponent } from './book-table/book-table.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CountdownComponent,
    MenuComponent,
    TestimonialsComponent,
    ChefsComponent,
    EventsComponent,
    GalleryComponent,
    ContactComponent,
    BookTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
