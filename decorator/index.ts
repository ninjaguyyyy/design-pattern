import { Coffee, Tea } from "./beverage";
import { Cream, Mocha } from "./condimen";

function main() {
  // Coffee
  const beverage = new Coffee();
  console.log(
    `${beverage.description} -  $${beverage.cost()}`
  );

  // Tea
  const beverage1 = new Tea();
  console.log(
    `${beverage1.description} -  $${beverage1.cost()}`
  );

  // Coffee with Mocha
  let beverage2 = new Coffee();
  beverage2 = new Mocha(beverage2);
  console.log(
    `${beverage2.description} -  $${beverage2.cost()}`
  );

  // Tea with 2 Mocha, 1 Cream
  let beverage3 = new Tea();
  beverage3 = new Mocha(beverage3);
  beverage3 = new Mocha(beverage3);
  beverage3 = new Cream(beverage3);
  console.log(
    `${beverage3.description} -  $${beverage3.cost()}`
  );
}

main();
