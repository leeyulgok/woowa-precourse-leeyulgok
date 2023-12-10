import Progress from "../src/Progress.js";
import InputView from "../src/InputView.js";

jest.mock("../src/InputView.js");

describe("Progress 통합 테스트", () => {
  test("getComputerNumber: 정상처리 확인", () => {
    const computerNumber = Progress.getComputerNumber();

    expect(computerNumber).toHaveLength(3);
    expect(new Set(computerNumber).size).toBe(3);
    expect(computerNumber).toMatch(/^[1-9]{3}$/);
  });

  test("getUserNumber: 정상처리 확인", async () => {
    InputView.readUserNumber.mockResolvedValue("123");

    const userNumber = await Progress.getUserNumber();

    expect(userNumber).toBe("123");
  });

  test("checkStrikesAndBalls: 정상처리 확인", () => {
    const resultOne = Progress.checkStrikesAndBalls("123", "123");
    const resultTwo = Progress.checkStrikesAndBalls("123", "321");
    const resultThree = Progress.checkStrikesAndBalls("123", "312");
    const resultFour = Progress.checkStrikesAndBalls("123", "456");

    expect(resultOne).toEqual({strikes: 3, balls: 0,});
    expect(resultTwo).toEqual({strikes: 1, balls: 2,});
    expect(resultThree).toEqual({strikes: 0, balls: 3,});
    expect(resultFour).toEqual({strikes: 0, balls: 0,});
  });

  test("getIsRestart: 정상처리 확인 - 재시작인 경우", async () => {
    InputView.readIsRestart.mockResolvedValue(true); 
  
    const isRestart = await Progress.getIsRestart();
  
    expect(isRestart).toBeTruthy();
  });
  
  test("getIsRestart: 정상처리 확인 - 재시작이 아닌 경우", async () => {
    InputView.readIsRestart.mockResolvedValue(false); 
  
    const isRestart = await Progress.getIsRestart();
  
    expect(isRestart).toBeFalsy();
  });
  
});
