import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ServiceComponent } from './service/service.component';
import { ChefComponent } from './chef/chef.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminChefComponent } from './admin/admin-chef/admin-chef.component';
import { AdminServiceComponent } from './admin/admin-service/admin-service.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminReservationComponent } from './admin/admin-reservation/admin-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    AdminAboutComponent,
    AdminMenuComponent,
    AdminChefComponent,
    AdminServiceComponent,
    AdminFooterComponent,
    AdminReservationComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    ServiceComponent,
    CategoryComponent,
    ChefComponent,
    FooterComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
