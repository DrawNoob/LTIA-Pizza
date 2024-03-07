import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PizzaMenuComponent } from './components/pizza-menu/pizza-menu.component';
import { PizzaItemComponent } from './components/pizza-menu/pizza-item/pizza-item.component';
import { PizzaCunstructorComponent } from './components/pizza-cunstructor/pizza-cunstructor.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewPizzaAddingComponent } from './components/pizza-menu/new-pizza-adding/new-pizza-adding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaMenuComponent,
    PizzaItemComponent,
    PizzaCunstructorComponent,
    HomePageComponent,
    NewPizzaAddingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
