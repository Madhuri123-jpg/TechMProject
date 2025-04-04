import { Component } from '@angular/core';
import { WeatherSearchComponent } from "./components/weather-search/weather-search.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected 'styleUrl' to 'styleUrls'
  ,
  imports: [WeatherSearchComponent]
})
export class AppComponent {
  title = 'weather-app';
  cityName: string | undefined;

  searchWeather() {
    console.log(this.cityName);
  }
}