import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PizzaMenuComponent } from './components/pizza-menu/pizza-menu.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaCunstructorComponent } from './components/pizza-cunstructor/pizza-cunstructor.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaMenuComponent,
    PizzaItemComponent,
    PizzaCunstructorComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
