import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routing } from './app.routing';

import { restaurantsRouting } from "./restaurants/restaurants.routing";
import { RestaurantsModule } from "./restaurants/restaurants.module";

import { dishesRouting } from "./dishes/dishes.routing";
import { DishesModule } from "./dishes/dishes.module";

@NgModule({
  declarations: [
    AppComponent,           
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RestaurantsModule,
    restaurantsRouting,

    dishesRouting,
    DishesModule,
    
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
