export interface CurrentWeather {
    city: string;
    country: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
    icon: string;
    date: Date;
  }
  
  export interface ForecastItem {
    date: Date;
    temperature: number;
    description: string;
    icon: string;
  }
  
  export interface WeatherForecast {
    city: string;
    country: string;
    forecast: ForecastItem[];
  }