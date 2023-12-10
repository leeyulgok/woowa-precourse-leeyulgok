import Progress from "../src/Progress";
import InputView from "../src/InputView";
import Car from "../src/Car";

jest.mock("../src/InputView.js");

describe("Progress 통합 테스트", () => {
  test("getCarNames: 정상입력", async () => {
    InputView.readCarNames.mockResolvedValue(["KOGI", "GOOD", "name"]);

    const names = await Progress.getCarNames();

    expect(names).toEqual(["KOGI", "GOOD", "name"]);
  });

  test("createCars: 정상작동", () => {
    const names = ["KOGI", "GOOD", "name"];
    const cars = Progress.createCars(names);

    cars.forEach((car, index) => {
      expect(car).toBeInstanceOf(Car);
      expect(car.name).toBe(names[index]);
    });
  });

  test("getRacingTimes: 정상입력", async () => {
    InputView.readRacingTimes.mockResolvedValue(10);

    const times = await Progress.getRacingTimes();

    expect(times).toBe(10);
  });

  test("resultWinners: 정상작동 - 한 명일 경우", () => {
    const cars = [new Car("One"), new Car("Two"), new Car("Three")];
    
    cars.forEach((car, index) => {
      if(index === 1) {
        car.setPosition();
      }
    })

    const winners = Progress.resultWinners(cars);
    
    expect(winners).toBe("Two");
  });

  test("resultWinners: 정상작동 - 다수일 경우", () => {
    const cars = [new Car("One"), new Car("Two"), new Car("Three")];
    
    cars.forEach((car, index) => {
      if(index !== 1) {
        car.setPosition();
      }
    })

    const winners = Progress.resultWinners(cars);
    
    expect(winners).toBe("One, Three");
  });
});
