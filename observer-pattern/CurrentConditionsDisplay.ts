import { DisplayElement, Observer } from ".";
import WeatherData from "./WeatherData";

export default class CurrentConditionsDisplay
  implements Observer, DisplayElement
{
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update() {
    this.temperature = this.weatherData.temperature;
    this.humidity = this.weatherData.humidity;
    this.display();
  }

  public display() {
    console.log(`
    CurrentConditionsDisplay: 
    - temperature: ${this.temperature}
    - humidity: ${this.humidity}`);
  }
}
