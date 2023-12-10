import { Random } from "@woowacourse/mission-utils";
import { createBaseballNumber, compareNumber } from "../src/utilsFunctions.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("utilsFunction 단위 테스트", () => {
  test("createBaseballNumber: 정상작동 확인", () => {
    Random.pickNumberInRange
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);

    const number = createBaseballNumber();
    const LENGTH = 3;

    expect(number.length).toBe(LENGTH);

    const digits = String(number).split("");
    expect(new Set(digits).size).toBe(3);
    digits.forEach((digit) => {
      expect(parseInt(digit)).toBeGreaterThanOrEqual(1);
      expect(parseInt(digit)).toBeLessThanOrEqual(9);
    });
  });

  test("compareNumber: 스트라이크만 있는 경우", () => {
    const computerNumber = "123";
    const userNumber = "123";

    expect(compareNumber(computerNumber, userNumber)).toEqual({
      strikes: 3,
      balls: 0,
    });
  });

  test("compareNumber: 볼과 스트라이크가 있는 경우", () => {
    const computerNumber = "123";
    const userNumber = "213";

    expect(compareNumber(computerNumber, userNumber)).toEqual({
      strikes: 1,
      balls: 2,
    });
  });

  test("compareNumber: 볼만 있는 경우", () => {
    const computerNumber = "123";
    const userNumber = "312";

    expect(compareNumber(computerNumber, userNumber)).toEqual({
      strikes: 0,
      balls: 3,
    });
  });

  test("compareNumber: 낫싱인 경우", () => {
    const computerNumber = "123";
    const userNumber = "456";

    expect(compareNumber(computerNumber, userNumber)).toEqual({
      strikes: 0,
      balls: 0,
    });
  });
});
