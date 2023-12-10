import InputView from "../src/InputView.js";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("InputView 통합 테스트", () => {
  test("readUserNumber: 정상적인 기능 확인", async () => {
    Console.readLineAsync.mockResolvedValue("123");

    const input = await InputView.readUserNumber();

    expect(input).toBe("123");
  });

  test("readUserNumber: 예외 입력의 경우", async () => {
    const invalidInputs = ["52a", "112", "056", null, "2"];

    for (const input of invalidInputs) {
      Console.readLineAsync.mockResolvedValue(input);
      await expect(InputView.readUserNumber()).rejects.toThrow();
    }
  });

  test("readIsRestart: 정상적인 기능 확인 - 재시작인 경우", async () => {
    Console.readLineAsync.mockResolvedValue("1");
    const input = await InputView.readIsRestart();

    expect(input).toBeTruthy();
  });

  test("readIsRestart: 정상적인 기능 확인 - 재시작이 아닌 경우", async () => {
    Console.readLineAsync.mockResolvedValue("2");
    const input = await InputView.readIsRestart();

    expect(input).toBeFalsy();
  });

  test("readIsRestart: 예외 입력의 경우", async () => {
    const invalidInputs = ["5", "8", "0", null, "word"];

    for (const input of invalidInputs) {
      Console.readLineAsync.mockResolvedValue(input);
      await expect(InputView.readIsRestart()).rejects.toThrow();
    }
  });
});
