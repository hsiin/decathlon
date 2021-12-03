import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/service/home.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-detail-sport',
  templateUrl: './detail-sport.component.html',
  styleUrls: ['./detail-sport.component.scss'],
})
export class DetailSportComponent implements OnInit {
  id: number = NaN;
  sportItem: any;
  constructor(public homeService: HomeService, public loader: LoaderService) {}

  ngOnInit(): void {
    let sportId = localStorage.getItem('idSport');
    this.id = parseInt(sportId as string);
    this.getSportById(this.id);
  }

  getSportById(id: number): void {
    this.loader.isLoading = true;
    this.homeService.getSportByid(id).subscribe((res: any) => {
      this.sportItem = res.data;
      this.loader.isLoading = false;
    });
  }
}
