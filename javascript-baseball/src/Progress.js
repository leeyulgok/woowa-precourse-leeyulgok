import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { createBaseballNumber, compareNumber } from "./utilsFunctions.js";

const Progress = {
  start() {
    OutputView.printStart();
  },

  getComputerNumber() {
    return createBaseballNumber();
  },

  async getUserNumber() {
    return await InputView.readUserNumber();
  },

  checkStrikesAndBalls(computerNumber, userNumber) {
    const result = compareNumber(computerNumber, userNumber);
    OutputView.printStrikesAndBalls(result);
    return result;
  },

  printThreeStrike() {
    OutputView.printExit();
  },

  async getIsRestart() {
    return await InputView.readIsRestart();
  },
};

export default Progress;
