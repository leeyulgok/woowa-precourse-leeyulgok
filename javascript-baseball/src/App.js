import Progress from "./Progress.js";

class App {
  async run() {
    Progress.start();

    let isRestart = true;
    while (isRestart) {
      const computerNumber = Progress.getComputerNumber();

      let isGame = true;
      while (isGame) {
        const userNumber = await Progress.getUserNumber();
        const result = Progress.checkStrikesAndBalls(computerNumber, userNumber);
        if (result.strikes === 3) {
          Progress.printThreeStrike();
          isGame = false;
        }
      }
      isRestart = await Progress.getIsRestart();
    }
  }
}

export default App;
