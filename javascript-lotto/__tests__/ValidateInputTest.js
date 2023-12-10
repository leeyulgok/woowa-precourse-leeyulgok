import ValidateInput from "../src/ValidateInput";

describe("ValidateInput 통합 테스트", () => {
  test("validateMoney: 정상적인 입력", () => {
    const inputOne = "1000";
    const inputTwo = "21000";
    const inputThree = "400000";

    expect(ValidateInput.validateMoney(inputOne)).toBe(1000);
    expect(ValidateInput.validateMoney(inputTwo)).toBe(21000);
    expect(ValidateInput.validateMoney(inputThree)).toBe(400000);
  });

  test("validateMoney: 예외입력 - 문자가 포함된 경우", () => {
    const inputOne = "8000원";
    const inputTwo = "1a";
    const inputThree = "$90,000";

    expect(() => ValidateInput.validateMoney(inputOne)).toThrow();
    expect(() => ValidateInput.validateMoney(inputTwo)).toThrow();
    expect(() => ValidateInput.validateMoney(inputThree)).toThrow();
  });

  test("validateMoney: 예외입력 - 0 또는 음수를 입력한 경우", () => {
    const inputOne = "0";
    const inputTwo = null;
    const inputThree = "-100";

    expect(() => ValidateInput.validateMoney(inputOne)).toThrow();
    expect(() => ValidateInput.validateMoney(inputTwo)).toThrow();
    expect(() => ValidateInput.validateMoney(inputThree)).toThrow();
  });

  test("validateMoney: 예외입력 - 1000 단위가 아닌 경우", () => {
    const inputOne = "30001";
    const inputTwo = "9900";
    const inputThree = "100030";

    expect(() => ValidateInput.validateMoney(inputOne)).toThrow();
    expect(() => ValidateInput.validateMoney(inputTwo)).toThrow();
    expect(() => ValidateInput.validateMoney(inputThree)).toThrow();
  });

  test("validateWinningNumbers: 정상적인 입력", () => {
    const inputOne = "1,2,3,4,5,6";
    const inputTwo = "40,41,42,43,44,45";
    const inputThree = "10,20,30,40,25,26";

    expect(ValidateInput.validateWinningNumbers(inputOne)).toEqual([1,2,3,4,5,6]);
    expect(ValidateInput.validateWinningNumbers(inputTwo)).toEqual([40,41,42,43,44,45]);
    expect(ValidateInput.validateWinningNumbers(inputThree)).toEqual([10,20,30,40,25,26]);
  });

  test("validateWinningNumbers: 1~45사이의 숫자를 입력하지 않은 경우", () => {
    const inputOne = "1,2,0,4,5,6";
    const inputTwo = "40,41,42,-43,44,45";
    const inputThree = "10,20,48,40,25,32";

    expect(() => ValidateInput.validateWinningNumbers(inputOne)).toThrow()
    expect(() => ValidateInput.validateWinningNumbers(inputTwo)).toThrow()
    expect(() => ValidateInput.validateWinningNumbers(inputThree)).toThrow()
  });

  test("validateWinningNumbers: 6자리가 아닌 경우", () => {
    const inputOne = "1,2,3,4,5";
    const inputTwo = "40,41,42,43,44,45,13";
    const inputThree = "10,20,48";

    expect(() => ValidateInput.validateWinningNumbers(inputOne)).toThrow()
    expect(() => ValidateInput.validateWinningNumbers(inputTwo)).toThrow()
    expect(() => ValidateInput.validateWinningNumbers(inputThree)).toThrow()
  });

  test("validateWinningNumbers: 중복되는 숫자가 있는 경우", () => {
    const inputOne = "1,2,3,4,5,5";
    const inputTwo = "40,41,42,43,44,44";
    const inputThree = "10,20,48,10,20,48";

    expect(() => ValidateInput.validateWinningNumbers(inputOne)).toThrow()
    expect(() => ValidateInput.validateWinningNumbers(inputTwo)).toThrow()
    expect(() => ValidateInput.validateWinningNumbers(inputThree)).toThrow()
  });

  test("validateBonusNumber: 정상적인 입력", () => {
    const LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];
    const inputOne = "7";
    const inputTwo = "45";
    const inputThree = "15";

    expect(ValidateInput.validateBonusNumber(inputOne, LOTTO_NUMBER)).toBe(7);
    expect(ValidateInput.validateBonusNumber(inputTwo, LOTTO_NUMBER)).toBe(45);
    expect(ValidateInput.validateBonusNumber(inputThree, LOTTO_NUMBER)).toBe(15);
  });

  test("validateBonusNumber: 예외입력 - 중복되는 숫자를 입력할 경우", () => {
    const LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];
    const inputOne = "4";
    const inputTwo = "3";
    const inputThree = "6";

    expect(() => ValidateInput.validateBonusNumber(inputOne, LOTTO_NUMBER)).toThrow();
    expect(() => ValidateInput.validateBonusNumber(inputTwo, LOTTO_NUMBER)).toThrow();
    expect(() => ValidateInput.validateBonusNumber(inputThree, LOTTO_NUMBER)).toThrow();
  });
});