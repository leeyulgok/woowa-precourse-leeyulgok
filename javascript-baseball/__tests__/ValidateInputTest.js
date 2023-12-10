import ValidateInput from "../src/ValidateInput.js";

describe("ValidateInput 통합 테스트", () => {
  test("validateUserNumber: 정상적인 입력", () => {
    const inputOne = "123";
    const inputTwo = "456";
    const inputThree = "789";

    expect(ValidateInput.validateUserNumber(inputOne)).toBe(inputOne);
    expect(ValidateInput.validateUserNumber(inputTwo)).toBe(inputTwo);
    expect(ValidateInput.validateUserNumber(inputThree)).toBe(inputThree);
  });

  test("validateUserNumber: 예외입력 - 3자리 숫자가 아닌 경우", () => {
    const inputOne = "5";
    const inputTwo = "79";
    const inputThree = "2469";

    expect(() => ValidateInput.validateUserNumber(inputOne)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputTwo)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputThree)).toThrow();
  });

  test("validateUserNumber: 예외입력 - 숫자가 중복되거나 0을 포함한 경우", () => {
    const inputOne = "551";
    const inputTwo = "430";
    const inputThree = "101";

    expect(() => ValidateInput.validateUserNumber(inputOne)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputTwo)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputThree)).toThrow();
  });

  test("validateUserNumber: 예외입력 - 숫자 이외의 값을 입력한 경우", () => {
    const inputOne = "str";
    const inputTwo = "56a";
    const inputThree = "-12";

    expect(() => ValidateInput.validateUserNumber(inputOne)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputTwo)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputThree)).toThrow();
  });

  test("validateUserNumber: 예외입력 - 가장자리 예외", () => {
    const inputOne = "";
    const inputTwo = null;

    expect(() => ValidateInput.validateUserNumber(inputOne)).toThrow();
    expect(() => ValidateInput.validateUserNumber(inputTwo)).toThrow();
  });

  test("validateRestart: 정상적인 입력", () => {
    const inputOne = "1";
    const inputTwo = "2";

    expect(ValidateInput.validateRestart(inputOne)).toBeTruthy();
    expect(ValidateInput.validateRestart(inputTwo)).toBeFalsy();
  });

  test("validateRestart: 예외입력 - 1 또는 2 이외의 값을 입력한 경우", () => {
    const inputOne = "3";
    const inputTwo = "0";
    const inputThree = "9";

    expect(() => ValidateInput.validateRestart(inputOne)).toThrow();
    expect(() => ValidateInput.validateRestart(inputTwo)).toThrow();
    expect(() => ValidateInput.validateRestart(inputThree)).toThrow();
  });

  test("validateRestart: 예외입력 - 문자를 입력한 경우", () => {
    const inputOne = "YES";
    const inputTwo = "NO";
    const inputThree = "word";

    expect(() => ValidateInput.validateRestart(inputOne)).toThrow();
    expect(() => ValidateInput.validateRestart(inputTwo)).toThrow();
    expect(() => ValidateInput.validateRestart(inputThree)).toThrow();
  });

  test("validateRestart: 예외입력 - 가장자리 예외", () => {
    const inputOne = "";
    const inputTwo = null;

    expect(() => ValidateInput.validateRestart(inputOne)).toThrow();
    expect(() => ValidateInput.validateRestart(inputTwo)).toThrow();
  });
});