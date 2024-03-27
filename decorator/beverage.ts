export abstract class Beverage {
  private _description = "Unknown Beverage";

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  public abstract cost(): number;
}

export class Coffee extends Beverage {
  constructor() {
    super();
    this.description = "Coffee";
  }

  public cost() {
    return 2;
  }
}

export class Tea extends Beverage {
  constructor() {
    super();
    this.description = "Tea";
  }

  public cost() {
    return 1;
  }
}
