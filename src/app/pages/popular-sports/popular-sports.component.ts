import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';
import { HomeService } from '../home/service/home.service';

@Component({
  selector: 'app-popular-sports',
  templateUrl: './popular-sports.component.html',
  styleUrls: ['./popular-sports.component.scss'],
})
export class PopularSportsComponent implements OnInit {
  popularSports: Array<any> = [];
  sports: Array<any> = [];
  constructor(
    public homeService: HomeService,
    private router: Router,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.getSports();
  }

  getSports(): void {
    this.loader.isLoading = true;
    this.homeService.getSports().subscribe((res: any) => {
      this.sports = res.data;
      this.sports.forEach((element) => {
        if (element.relationships.children.length > 0) {
          this.popularSports.push(element);
        }
      });
      this.loader.isLoading = false;
    });
  }


  details(id: Number): void {
    localStorage.setItem('idSport', id.toString());
    this.router.navigate(['/detailSport']);
  }
}
