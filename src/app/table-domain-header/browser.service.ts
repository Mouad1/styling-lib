import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Browser from './browser';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor(private http: HttpClient) {}

  getBrowsers(): Observable<Browser[]> {
    return this.http
      .get<{ data: Browser[] }>('/assets/data/browsers.json')
      .pipe(map((response) => response.data));
  }
}
