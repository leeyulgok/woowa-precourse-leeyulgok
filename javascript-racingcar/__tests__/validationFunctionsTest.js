import { checkRacingNames, checkName, checkDupliNames, checkNumber, checkTimes } from "../src/validationFunctions";

describe("validationFunctions 단위 테스트", () => {
  test("checkName: 정상적인 입력", () => {
    const nameOne = "kogi";
    const nameTwo = "G";
    const nameThree = "halid";

    expect(() => checkName(nameOne)).not.toThrow();
    expect(() => checkName(nameTwo)).not.toThrow();
    expect(() => checkName(nameThree)).not.toThrow();
  });
  
  test("checkName: 예외 입력 - 영어 이외의 다른 문자가 들어간 경우", () => {
    const nameOne = "k3ogi";
    const nameTwo = "G--d";
    const nameThree = "김박수";

    expect(() => checkName(nameOne)).toThrow();
    expect(() => checkName(nameTwo)).toThrow();
    expect(() => checkName(nameThree)).toThrow();
  });
  
  test("checkName: 예외 입력 - 5글자 이하가 아닌 경우", () => {
    const nameOne = "yolloo";
    const nameTwo = "";
    const nameThree = null;

    expect(() => checkName(nameOne)).toThrow();
    expect(() => checkName(nameTwo)).toThrow();
    expect(() => checkName(nameThree)).toThrow();
  });

  test("checkRacingNames: 정상적인 입력", () => {
    const namesOne = ["kogi", "G" , "halid"];
    const namesTwo = ["Goood", "asdfa", "DD", "S"];

    expect(() => checkRacingNames(namesOne)).not.toThrow();
    expect(() => checkRacingNames(namesTwo)).not.toThrow();
  });

  test("checkRacingNames: 한 명인 이하인 경우", () => {
    const namesOne = ["kogi"];
    const namesTwo = [""];

    expect(() => checkRacingNames(namesOne)).toThrow();
    expect(() => checkRacingNames(namesTwo)).toThrow();
  });

  test("checkDupliNames: 정상적인 입력", () => {
    const namesOne = ["kogi", "G" , "halid"];
    const namesTwo = ["Goood", "asdfa", "DD", "S"];

    expect(() => checkDupliNames(namesOne)).not.toThrow();
    expect(() => checkDupliNames(namesTwo)).not.toThrow();
  });

  test("checkDupliNames: 중복되는 이름이 있는 경우", () => {
    const namesOne = ["kogi", "G", "halid", "kogi"];
    const namesTwo = ["Goood", "asdfa", "DD", "S", "asdfa"];

    expect(() => checkDupliNames(namesOne)).toThrow();
    expect(() => checkDupliNames(namesTwo)).toThrow();
  });

  test("checkNumber: 정상적인 입력", () => {
    const numberOne = "9";
    const numberTwo = "30";
    const numberThree = "100";

    expect(() => checkNumber(numberOne)).not.toThrow();
    expect(() => checkNumber(numberTwo)).not.toThrow();
    expect(() => checkNumber(numberThree)).not.toThrow();
  });

  test("checkNumber: 예외 입력 - 문자 또는 null인 경우", () => {
    const numberOne = "str";
    const numberTwo = "34a";
    const numberThree= null;

    expect(() => checkNumber(numberOne)).toThrow();
    expect(() => checkNumber(numberTwo)).toThrow();
    expect(() => checkNumber(numberThree)).toThrow();
  });

  test("checkTimes: 정상적인 입력", () => {
    const numberOne = "9";
    const numberTwo = "30";
    const numberThree = "100";

    expect(checkTimes(numberOne)).toBe(9);
    expect(checkTimes(numberTwo)).toBe(30);
    expect(checkTimes(numberThree)).toBe(100);
  });
  
  test("checkTimes: 예외 입력 - 0 또는 음수인 경우", () => {
    const numberOne = "0";
    const numberTwo = "";
    const numberThree= "-10";

    expect(() => checkTimes(numberOne)).toThrow();
    expect(() => checkTimes(numberTwo)).toThrow();
    expect(() => checkTimes(numberThree)).toThrow();
  });
});