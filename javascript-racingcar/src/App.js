import Progress from "./Progress.js";

class App {
  async run() {
    const names = await Progress.getCarNames();
    const cars = Progress.createCars(names);
    const times = await Progress.getRacingTimes();

    Progress.playRacing(cars, times);
    
    const winners = Progress.resultWinners(cars);
    Progress.printWinners(winners);
  }
};

export default App;