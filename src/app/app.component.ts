import { Component, AfterContentChecked } from '@angular/core';
import { LoaderService } from './loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  public isLoading: boolean = false;

  constructor(public loader: LoaderService, private router : Router) { }

  ngAfterContentChecked(): void {
    this.isLoading = this.loader.isLoading;
  }

  getid(id: string): void {
    let el = document.getElementById(id);
    el?.classList.toggle('active');
    document.getElementById('home')?.classList.remove('active');
    this.router.navigate(['/popularSports']);

  }

  getidHome(id: string): void {
    let el = document.getElementById(id);
    el?.classList.toggle('active');
    document.getElementById('popular')?.classList.remove('active');
    this.router.navigate(['/home']);


  }
}
