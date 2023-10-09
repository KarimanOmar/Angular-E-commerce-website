import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { MainComponent } from './Component/main/main.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SideMenuComponent } from './Component/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './Directives/custom-directive.directive';
import { CardnumberPipe } from './Pipes/cardnumber.pipe';
import { ProductsParentComponent } from './Component/products-parent/products-parent.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './Component/admin/admin.component';
import { SignUpUserComponent } from './Component/sign-up-user/sign-up-user.component';
import { LogInComponent } from './Component/log-in/log-in.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SideMenuComponent,
    CustomDirectiveDirective,
    CardnumberPipe,
    ProductsParentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AdminComponent,
    SignUpUserComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
