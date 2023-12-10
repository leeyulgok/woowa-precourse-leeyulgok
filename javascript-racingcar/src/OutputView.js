import { Console } from "@woowacourse/mission-utils";
import OUTPUT_MESSAGES from "../constants/OutputMessages.js";

const OutputView = {
  printResultMessage() {
    Console.print(OUTPUT_MESSAGES.RESULT);
  },

  printPlayRacing(cars) {
    cars.forEach(car => Console.print(`${car.name} : ${car.position}`));
    Console.print("");
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  }
};

export default OutputView;