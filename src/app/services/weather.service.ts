import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // This will later point to your .NET backend API
  private apiUrl = 'http://localhost:5000/api/weather';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/current/${city}`);
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/forecast/${city}`);
  }
}
