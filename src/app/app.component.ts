import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Root } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather';
  city_name: string = 'new york'; 
  c_or_f: String = 'F';
  temp: number = 0;
  weatherData?: Root;
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.city_name);
    this.city_name= '';
  }

  OnSubmit(){
    this.getWeatherData(this.city_name);
    this.city_name= '';
  }
  private getWeatherData(city_name: string) {
    this.weatherService.getWeatherData(city_name)
    .subscribe({
      next: (response: any) => {
        this.weatherData = response;
      }
    });
  }
}


