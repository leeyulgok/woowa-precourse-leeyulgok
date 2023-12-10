import ERROR_MESSAGES from "../constants/ErrorMessages";
import { checkOnlyNumber, checkDate } from "../src/validationFunctions";

describe("validationFunctions 단위 테스트", () => {
  test("checkOnlyNumber: 정상적인 입력", () => {
    const inputOne = "1";
    const inputTwo = "30";
    const inputThree = "100";

    expect(() => checkOnlyNumber(inputOne)).not.toThrow();
    expect(() => checkOnlyNumber(inputTwo)).not.toThrow();
    expect(() => checkOnlyNumber(inputThree)).not.toThrow();
  });

  test("checkOnlyNumber: 예외입력 - 문자를 포함한 경우", () => {
    const inputOne = "1a";
    const inputTwo = "d30";
    const inputThree = "word";

    expect(() => checkOnlyNumber(inputOne)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    expect(() => checkOnlyNumber(inputTwo)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    expect(() => checkOnlyNumber(inputThree)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
  });

  test("checkOnlyNumber: 예외입력 - 0 또는 음수, 공백을 입력한 경우", () => {
    const inputOne = "0";
    const inputTwo = "-10";
    const inputThree = " ";

    expect(() => checkOnlyNumber(inputOne)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    expect(() => checkOnlyNumber(inputTwo)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    expect(() => checkOnlyNumber(inputThree)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
  });

  test("checkOnlyNumber: 예외입력 - 추가적인 예외", () => {
    const inputOne = null;
    const inputTwo = "";

    expect(() => checkOnlyNumber(inputOne)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    expect(() => checkOnlyNumber(inputTwo)).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
  });

  test("checkDate: 정상적인 입력", () => {
    const inputOne = "1";
    const inputTwo = "31";
    const inputThree = "15";

    expect(() => checkDate(inputOne)).not.toThrow();
    expect(() => checkDate(inputTwo)).not.toThrow();
    expect(() => checkDate(inputThree)).not.toThrow();
  });

  test("checkDate: 예외입력 - 1~31사이 이외의 숫자를 입력한 경우", () => {
    const inputOne = "32";
    const inputTwo = "43";
    const inputThree = "100";

    expect(() => checkDate(inputOne)).toThrow(ERROR_MESSAGES.INVALID_DATE);
    expect(() => checkDate(inputTwo)).toThrow(ERROR_MESSAGES.INVALID_DATE);
    expect(() => checkDate(inputThree)).toThrow(ERROR_MESSAGES.INVALID_DATE);
  });
});