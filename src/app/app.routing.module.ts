import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

const routes: Routes = [
    { path: '', redirectTo: '/current', pathMatch: 'full' },
    { path: 'current', component: CurrentWeatherComponent },
    { path: 'forecast', component: WeatherForecastComponent },
    { path: '', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }