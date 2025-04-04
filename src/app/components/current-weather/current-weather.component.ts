import { Component } from '@angular/core';
import { CurrentWeather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';
import { WeatherSearchComponent } from "../weather-search/weather-search.component";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  imports: [WeatherSearchComponent]
})
export class CurrentWeatherComponent {
  currentWeather: CurrentWeather | null = null;
  loading = false;
  errorMessage = '';

  constructor(private weatherService: WeatherService) {}

  onSearch(city: string) {
    this.loading = true;
    this.errorMessage = '';
    
    this.weatherService.getCurrentWeather(city).subscribe({
      next: (data) => {
        this.currentWeather = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching weather data', error);
        this.errorMessage = 'Failed to fetch weather data. Please try again.';
        this.loading = false;
      }
    });
  }
}
