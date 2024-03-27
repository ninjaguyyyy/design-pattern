import { Beverage } from "./beverage";

abstract class CondimentDecorator extends Beverage {
  _beverage: Beverage;
  abstract get description(): string;
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
  }

  get description(): string {
    return this._beverage.description + " + Mocha";
  }

  public cost(): number {
    return this._beverage.cost() + 0.5;
  }
}

export class Cream extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
  }

  get description(): string {
    return this._beverage.description + " + Cream";
  }

  public cost(): number {
    return this._beverage.cost() + 0.1;
  }
}
