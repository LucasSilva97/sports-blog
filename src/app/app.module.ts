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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HighlightsCardComponent } from './components/highlights-card/highlights-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootballNewsComponent,
    FormulaOneNewsComponent,
    VolleyballNewsComponent,
    BasketballNewsComponent,
    UfcNewsComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    HighlightsCardComponent,
    SmallCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
