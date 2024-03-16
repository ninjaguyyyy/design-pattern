import CurrentConditionsDisplay from "./CurrentConditionsDisplay";
import ForecastDisplay from "./ForecastDisplay";
import WeatherData from "./WeatherData";

export interface Observer {
  update(): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers();
}

export interface DisplayElement {
  display(): void;
}

function main() {
  const weatherData = new WeatherData();

  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
  const forecastDisplay = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65);
}

main();
