import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getSports(): Observable<any> {
    return this.http.get(environment.api);
  }

  getSportByid(id: number): Observable<any> {
    return this.http.get(environment.api + id);
  }
}
