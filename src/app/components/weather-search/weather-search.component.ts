import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  standalone: true,
  imports:[FormsModule],
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  cityName: string = '';
  
  @Output() searchEvent = new EventEmitter<string>();

  searchWeather() {
    if (this.cityName.trim()) {
      this.searchEvent.emit(this.cityName);
    }
  }
}