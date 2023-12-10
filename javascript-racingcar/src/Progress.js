import InputView from "./InputView.js";
import { getIsGo } from "./utilsFunctions.js";
import Car from "./Car.js";
import OutputView from "./OutputView.js";

const Progress = {
  async getCarNames() {
    return await InputView.readCarNames();
  },

  createCars(names) {
    return names.map((name) => new Car(name));
  },

  async getRacingTimes() {
    return await InputView.readRacingTimes();
  },

  playRacing(cars, times) {
    OutputView.printResultMessage();

    for (let i = 0; i < times; i++) {
      cars.forEach((car) => {
        const IsGo = getIsGo();
        if (IsGo) {
          car.setPosition();
        }
      });
      OutputView.printPlayRacing(cars);
    }
  },

  resultWinners(cars) {
    let max = 0;
    cars.forEach((car) => {
      if (max <= car.position.length) {
        max = car.position.length;
      }
    });

    return cars
      .filter((car) => car.position.length === max)
      .map(car => car.name)
      .join(", ");
  },

  printWinners(winners) {
    OutputView.printWinners(winners);
  },
};

export default Progress;
