import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FootballNewsComponent } from './pages/football-news/football-news.component';
import { FormulaOneNewsComponent } from './pages/formula-one-news/formula-one-news.component';
import { VolleyballNewsComponent } from './pages/volleyball-news/volleyball-news.component';
import { BasketballNewsComponent } from './pages/basketball-news/basketball-news.component';
import { UfcNewsComponent } from './pages/ufc-news/ufc-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootballNewsComponent,
    FormulaOneNewsComponent,
    VolleyballNewsComponent,
    BasketballNewsComponent,
    UfcNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
