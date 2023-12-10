import InputView from "../src/InputView";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("InputView 통합 테스트", () => {
  test("readCarNames: 정상적인 입력", async () => {
    Console.readLineAsync.mockResolvedValue("kogi,word");

    const input = await InputView.readCarNames();

    expect(input).toEqual(["kogi", "word"]);
  });

  test("readCarNames: 예외입력", async () => {
    const inputs = ["kogizz,gdod", null, "One", "str3,ss12", "word,word"];

    for (const input of inputs) {
      Console.readLineAsync.mockResolvedValue(input);
      await expect(InputView.readCarNames()).rejects.toThrow();
    }
  });

  test("readRacingTimes: 정상적인 입력", async () => {
    Console.readLineAsync.mockResolvedValue("5");

    const input = await InputView.readRacingTimes();

    expect(input).toBe(5);
  });

  test("readRacingTimes: 예외입력", async () => {
    const inputs = ["str", null, "0", "-10", "10a"];

    for (const input of inputs) {
      Console.readLineAsync.mockResolvedValue(input);
      await expect(InputView.readRacingTimes()).rejects.toThrow();
    }
  });
});
