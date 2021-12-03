import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailSportComponent } from './pages/detail-sport/detail-sport.component';
import { PopularSportsComponent } from './pages/popular-sports/popular-sports.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailSportComponent, PopularSportsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
