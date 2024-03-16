class WeatherDataV1 {
  private temperature: number = 1;
  private humidity: number = 2;
  private pressure: number = 3;

  private currentConditionsDisplay: CurrentConditionsDisplay;
  private forecastDisplay: ForecastDisplay;

  constructor(
    currentConditionsDisplay: CurrentConditionsDisplay,
    forecastDisplay: ForecastDisplay
  ) {
    this.currentConditionsDisplay = currentConditionsDisplay;
    this.forecastDisplay = forecastDisplay;
  }

  public measurementsChanged() {
    this.currentConditionsDisplay.display(
      this.temperature,
      this.humidity,
      this.pressure
    );
    this.forecastDisplay.display(
      this.temperature,
      this.humidity,
      this.pressure
    );
  }
}

interface WeatherDisplay {
  display(temperature: number, humidity: number, pressure: number): void;
}

class CurrentConditionsDisplay implements WeatherDisplay {
  public display(temperature: number, humidity: number, pressure: number) {
    console.log(`
    CurrentConditionsDisplay: 
    - temperature: ${temperature}
    - humidity: ${humidity}
    - pressure: ${pressure}`);
  }
}

class ForecastDisplay implements WeatherDisplay {
  public display(temperature: number, humidity: number, pressure: number) {
    const total = temperature + humidity + pressure;
    console.log(`
    ForecastDisplay: 
    => Forecast: ${total > 3 ? "Sunny" : "Rain"}`);
  }
}

function main() {
  const currentConditionsDisplay = new CurrentConditionsDisplay();
  const forecastDisplay = new ForecastDisplay();

  const weatherData = new WeatherDataV1(
    currentConditionsDisplay,
    forecastDisplay
  );

  weatherData.measurementsChanged();
}

main();
