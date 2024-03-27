import { DisplayElement, Observer } from ".";
import WeatherData from "./WeatherData";

export default class ForecastDisplay
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
    const total = this.temperature + this.humidity;
    console.log(`
    ForecastDisplay: 
    => Forecast: ${total > 3 ? "Sunny" : "Rain"}`);
  }
}
