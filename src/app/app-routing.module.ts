import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PizzaCunstructorComponent } from './components/pizza-cunstructor/pizza-cunstructor.component';
import { PizzaMenuComponent } from './components/pizza-menu/pizza-menu.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'pizza-menu', component: PizzaMenuComponent},
  { path: 'pizza-constructor', component: PizzaCunstructorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
