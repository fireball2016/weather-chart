import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) {}

  dailyForecast() {
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Seattle,US&appid=a85717f57b6bd30e011747de59dc3a60")
      .map(result => result)
  }

}
