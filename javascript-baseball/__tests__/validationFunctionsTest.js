import ERROR_MESSAGES from "../constants/ErrorMessages";
import { checkOnlyNumber, checkBaseballNumber, checkGameRestart } from "../src/validationFunctions";

describe("ValidateInput 단위 테스트", () => {
  test("checkOnlyNumber: 정상적인 입력", () => {
    const inputOne = "1";
    const inputTwo = "456";
    const inputThree = "84";

    expect(() => checkOnlyNumber(inputOne)).not.toThrow();
    expect(() => checkOnlyNumber(inputTwo)).not.toThrow();
    expect(() => checkOnlyNumber(inputThree)).not.toThrow();
  });

  test("checkOnlyNumber: 예외입력 - 문자 또는 특수문자가 들어간 경우", () => {
    const inputOne = "str";
    const inputTwo = "3a";
    const inputThree = "a9d";

    expect(() => checkOnlyNumber(inputOne)).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => checkOnlyNumber(inputTwo)).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => checkOnlyNumber(inputThree)).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
  });

  test("checkOnlyNumber: 예외입력 - 0 또는 음수인 경우", () => {
    const inputOne = "0";
    const inputTwo = "-1";
    const inputThree = "-154";

    expect(() => checkOnlyNumber(inputOne)).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => checkOnlyNumber(inputTwo)).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => checkOnlyNumber(inputThree)).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
  });

  test("checkBaseballNumber: 정상적인 입력", () => {
    const numberOne = "123";
    const numberTwo = "456";
    const numberThree = "789";

    expect(() => checkBaseballNumber(numberOne)).not.toThrow();
    expect(() => checkBaseballNumber(numberTwo)).not.toThrow();
    expect(() => checkBaseballNumber(numberThree)).not.toThrow();
  });

  test("checkBaseballNumber: 예외입력 - 3자리가 아닌 경우", () => {
    const inputOne = "6";
    const inputTwo = "43";
    const inputThree = "1495";

    expect(() => checkBaseballNumber(inputOne)).toThrow(
      ERROR_MESSAGES.INVALID_BASEBALL_NUMBER
    );
    expect(() => checkBaseballNumber(inputTwo)).toThrow(
      ERROR_MESSAGES.INVALID_BASEBALL_NUMBER
    );
    expect(() => checkBaseballNumber(inputThree)).toThrow(
      ERROR_MESSAGES.INVALID_BASEBALL_NUMBER
    );
  });

  test("checkBaseballNumber: 예외입력 - 중복된 숫자가 있거나 0이 있는 경우", () => {
    const inputOne = "778";
    const inputTwo = "502";
    const inputThree = "404";

    expect(() => checkBaseballNumber(inputOne)).toThrow(
      ERROR_MESSAGES.INVALID_BASEBALL_NUMBER
    );
    expect(() => checkBaseballNumber(inputTwo)).toThrow(
      ERROR_MESSAGES.INVALID_BASEBALL_NUMBER
    );
    expect(() => checkBaseballNumber(inputThree)).toThrow(
      ERROR_MESSAGES.INVALID_BASEBALL_NUMBER
    );
  });

  test("checkGameRestart: 정상적인 입력", () => {
    const YES = "1";
    const NO = "2";

    expect(checkGameRestart(YES)).toBeTruthy();
    expect(checkGameRestart(NO)).toBeFalsy();
  });

  test("checkGameRestart: 예외입력 - 1 또는 2가 아닌 경우", () => {
    const inputOne = "0";
    const inputTwo = "9";
    const inputThree = "6";

    expect(() => checkGameRestart(inputOne)).toThrow(
      ERROR_MESSAGES.INVALID_RESTART
    );
    expect(() => checkGameRestart(inputTwo)).toThrow(
      ERROR_MESSAGES.INVALID_RESTART
    );
    expect(() => checkGameRestart(inputThree)).toThrow(
      ERROR_MESSAGES.INVALID_RESTART
    );
  });
});
