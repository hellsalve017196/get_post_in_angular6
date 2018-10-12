import {Component, OnInit} from '@angular/core';
import {WeatherServiceService} from '../app/service/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherList: any;

  constructor(private weatherApi: WeatherServiceService) {
  }

  ngOnInit() {
    this.getWeatherData();
    this.setWeatherData();
  }

  public getWeatherData() {
    this.weatherApi.getWeather().subscribe(
      (response) => {
        this.weatherList = response;
        console.log(response);
      }
    );
  }

  public setWeatherData(data) {
    this.weatherApi.setWeather({'key': 'value'}).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
