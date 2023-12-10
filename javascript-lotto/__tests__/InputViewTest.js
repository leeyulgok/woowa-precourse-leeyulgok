import InputView from "../src/InputView";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  }
}));

describe("InputView 통합 테스트", () => {
  test("readMoney: 정상적인 입력", async () => {
    Console.readLineAsync.mockResolvedValue("1000");

    const input = await InputView.readMoney();

    expect(input).toBe(1000);
  });

  test("readWinningNumbers: 정상적인 입력", async () => {
    Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");

    const numbers = await InputView.readWinningNumbers();

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("readBonusNumber: 정상적인 입력", async () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    Console.readLineAsync.mockResolvedValue("7");

    const bonusNumber = await InputView.readBonusNumber(winningNumbers);

    expect(bonusNumber).toBe(7);
  });
  
});