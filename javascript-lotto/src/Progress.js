import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Lotto from "./Lotto.js";
import { createNumbers, winningResult, calculateProfit } from "./utilFunctions.js";

const Progress = {
  async getMoney() {
    return await InputView.readMoney();
  },

  createLotto(money) {
    const LOTTO_AMOUNT = 1000;

    let lottos = [];
    for(let i = 0; i < money / LOTTO_AMOUNT; i++) {
      lottos.push(new Lotto(createNumbers()));
    }

    return lottos;
  },

  printLottosNumber(lottos) {
    OutputView.printLottosNumber(lottos);
  },

  async getWinningNumbers() {
    return await InputView.readWinningNumbers();
  },

  async getBonusNumber(winningNumbers) {
    return await InputView.readBonusNumber(winningNumbers);
  },

  createWinningLotto(winningNumbers, bonusNumber) {
    return new Lotto(winningNumbers, bonusNumber);
  },

  getResult(lottos, winningLotto) {
    return winningResult(lottos, winningLotto);
  },

  printResult(result) {
    OutputView.printResult(result);
  },

  printProfit(result, money) {
    const profit = calculateProfit(result, money);
    OutputView.printProfit(profit);
  }
};

export default Progress;