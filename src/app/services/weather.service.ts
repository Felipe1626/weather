import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { api } from '../models/weather-api.model';
import { Root } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {  }
  lang: any = 'en';

  getWeatherData(city_name: string): Observable<Root> {
    return this.http.get<Root>(api.weatherApiBaseUrl + city_name, {
      headers: new HttpHeaders()
      .set(api.XRapidAPIHostHeaderName, api.XRapidAPIHostHeaderValue)
      .set(api.XRapidAPIKeyHeaderName, api.XRapidAPIKeyHeaderValue),
    })
  }
}