import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sports: Array<any> = [];
  popularSports: Array<any> = [];
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
