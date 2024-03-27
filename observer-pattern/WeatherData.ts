import { Observer, Subject } from ".";

export default class WeatherData implements Subject {
  private observers: Observer[] = [];
  private _temperature: number;
  private _humidity: number;

  get temperature() {
    return this._temperature;
  }

  get humidity() {
    return this._humidity;
  }

  public registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    // todo: handle remove observer
  }

  public notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(
    temperature: number,
    humidity: number
  ) {
    this._temperature = temperature;
    this._humidity = humidity;
    this.measurementsChanged();
  }
}
