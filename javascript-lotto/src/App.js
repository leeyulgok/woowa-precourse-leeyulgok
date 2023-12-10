import Progress from "./Progress.js";

class App {
  async run() {
    const money = await Progress.getMoney();

    const lottos = Progress.createLotto(money);
    Progress.printLottosNumber(lottos);

    const winningNumbers = await Progress.getWinningNumbers();
    const bonusNumber = await Progress.getBonusNumber(winningNumbers);
    const winningLotto = Progress.createWinningLotto(winningNumbers, bonusNumber);

    const result = Progress.getResult(lottos, winningLotto);
    Progress.printResult(result);
    Progress.printProfit(result, money);
  }
};

export default App;