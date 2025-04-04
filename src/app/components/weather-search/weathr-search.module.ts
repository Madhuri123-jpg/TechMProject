import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherSearchComponent } from './weather-search.component';

@NgModule({
  imports: [
    FormsModule,
    WeatherSearchComponent
  ]
})
export class WeatherSearchModule {}