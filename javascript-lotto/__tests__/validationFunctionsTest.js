import { checkNumberType, checkMoney, checkLottoNumber, checkLottoNumbers, checkDupliLottoNumber, checkBonusNumber } from "../src/validationFunctions";
describe("validationFunctions 단위 테스트", () => {
  test("checkNumberType: 정상입력", () => {
    const inputOne = "8000";
    const inputTwo = "1";
    const inputThree = "90000";

    expect(() => checkNumberType(inputOne)).not.toThrow();
    expect(() => checkNumberType(inputTwo)).not.toThrow();
    expect(() => checkNumberType(inputThree)).not.toThrow();
  });

  test("checkNumberType: 예외입력 - 문자가 포함된 경우", () => {
    const inputOne = "8000원";
    const inputTwo = "1a";
    const inputThree = "$90,000";

    expect(() => checkNumberType(inputOne)).toThrow();
    expect(() => checkNumberType(inputTwo)).toThrow();
    expect(() => checkNumberType(inputThree)).toThrow();
  });

  test("checkNumberType: 예외입력 - 0 또는 음수를 입력한 경우", () => {
    const inputOne = "0";
    const inputTwo = null;
    const inputThree = "-100";

    expect(() => checkNumberType(inputOne)).toThrow();
    expect(() => checkNumberType(inputTwo)).toThrow();
    expect(() => checkNumberType(inputThree)).toThrow();
  });

  test("checkMoney: 정상입력", () => {
    const inputOne = "30000";
    const inputTwo = "9000";
    const inputThree = "100000";

    expect(checkMoney(inputOne)).toBe(30000);
    expect(checkMoney(inputTwo)).toBe(9000);
    expect(checkMoney(inputThree)).toBe(100000);
  });

  test("checkMoney: 예외입력 - 1000 단위가 아닌 경우", () => {
    const inputOne = "30001";
    const inputTwo = "9900";
    const inputThree = "100030";

    expect(() => checkMoney(inputOne)).toThrow();
    expect(() => checkMoney(inputTwo)).toThrow();
    expect(() => checkMoney(inputThree)).toThrow();
  });

  test("checkLottoNumber: 정상입력", () => {
    const inputOne = "1";
    const inputTwo = "45";
    const inputThree = "24";

    expect(() => checkLottoNumber(inputOne)).not.toThrow();
    expect(() => checkLottoNumber(inputTwo)).not.toThrow();
    expect(() => checkLottoNumber(inputThree)).not.toThrow();
  });

  test("checkLottoNumber: 예외입력 - 1~45사이의 숫자를 입력하지 않은 경우", () => {
    const inputOne = "0";
    const inputTwo = "46";
    const inputThree = "";

    expect(() => checkLottoNumber(inputOne)).toThrow();
    expect(() => checkLottoNumber(inputTwo)).toThrow();
    expect(() => checkLottoNumber(inputThree)).toThrow();
  });

  test("checkLottoNumbers: 정상입력", () => {
    const inputOne = ["1", "2", "3", "4", "5", "6"];
    const inputTwo = ["40", "41", "42", "43", "44", "45"];
    const inputThree = ["10", "20", "30", "41", "25", "36"];

    expect(() => checkLottoNumbers(inputOne)).not.toThrow();
    expect(() => checkLottoNumbers(inputTwo)).not.toThrow();
    expect(() => checkLottoNumbers(inputThree)).not.toThrow();
  });

  test("checkLottoNumbers: 예외입력 - 6자리가 아닌 경우", () => {
    const inputOne = ["1", "2", "3", "4", "5"];
    const inputTwo = ["39", "40", "41", "42", "43", "44", "45"];
    const inputThree = ["10", "20", "30", "41"];

    expect(() => checkLottoNumbers(inputOne)).toThrow();
    expect(() => checkLottoNumbers(inputTwo)).toThrow();
    expect(() => checkLottoNumbers(inputThree)).toThrow();
  });

  test("checkDupliLottoNumber: 정상입력", () => {
    const inputOne = ["1", "2", "3", "4", "5", "6"];
    const inputTwo = ["40", "41", "42", "43", "44", "45"];
    const inputThree = ["10", "20", "30", "41", "25", "36"];

    expect(() => checkDupliLottoNumber(inputOne)).not.toThrow();
    expect(() => checkDupliLottoNumber(inputTwo)).not.toThrow();
    expect(() => checkDupliLottoNumber(inputThree)).not.toThrow();
  });

  test("checkDupliLottoNumber: 예외입력 - 중복되는 숫자가 있는 경우", () => {
    const inputOne = ["1", "2", "3", "4", "5", "5"];
    const inputTwo = ["40", "41", "42", "42", "44", "45"];
    const inputThree = ["10", "10", "30", "41", "25", "36"];

    expect(() => checkDupliLottoNumber(inputOne)).toThrow();
    expect(() => checkDupliLottoNumber(inputTwo)).toThrow();
    expect(() => checkDupliLottoNumber(inputThree)).toThrow();
  });

  test("checkBonusNumber: 정상입력", () => {
    const LOTTO_NUMBER = ["1", "2", "3", "4", "5", "6"];
    const inputOne = "7";
    const inputTwo = "45";
    const inputThree = "25";

    expect(checkBonusNumber(LOTTO_NUMBER, inputOne)).toBe(7);
    expect(checkBonusNumber(LOTTO_NUMBER, inputTwo)).toBe(45);
    expect(checkBonusNumber(LOTTO_NUMBER, inputThree)).toBe(25);
  });

  test("checkBonusNumber: 예외입력 - 중복되는 숫자가 있는 경우", () => {
    const LOTTO_NUMBER = [10, 20, 30, 40, 26, 45];
    const inputOne = "26";
    const inputTwo = "20";
    const inputThree = "30";

    expect(() => checkBonusNumber(LOTTO_NUMBER, inputOne)).toThrow();
    expect(() => checkBonusNumber(LOTTO_NUMBER, inputTwo)).toThrow();
    expect(() => checkBonusNumber(LOTTO_NUMBER, inputThree)).toThrow();
  });
});

