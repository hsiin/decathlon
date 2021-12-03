import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { DetailSportComponent } from '../app/pages/detail-sport/detail-sport.component';
import { PopularSportsComponent } from '../app/pages/popular-sports/popular-sports.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'detailSport', pathMatch: 'full', component: DetailSportComponent },
  {
    path: 'popularSports',
    pathMatch: 'full',
    component: PopularSportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
