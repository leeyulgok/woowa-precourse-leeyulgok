import OUTPUT_MESSAGES from "../constants/OutputMessages.js";
import { Console } from "@woowacourse/mission-utils";
import { formatResult } from "./utilsFunctions.js";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGES.START);
  },

  printStrikesAndBalls(result) {
    Console.print(formatResult(result));
  },

  printExit() {
    Console.print(OUTPUT_MESSAGES.EXIT);
  },
};

export default OutputView;
