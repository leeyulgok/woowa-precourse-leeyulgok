import ValidateInput from "../src/ValidateInput.js";

describe("ValidateInput 통합 테스트", () => {
  test("validateNames: 정상적인 입력", () => {
    const nameOne = "kogi,A,zero";
    const nameTwo = "good,word,gods,wowww";
    const nameThree = "lolol,ww";

    expect(ValidateInput.validateNames(nameOne)).toEqual(["kogi","A","zero"]);
    expect(ValidateInput.validateNames(nameTwo)).toEqual(["good","word","gods","wowww"]);
    expect(ValidateInput.validateNames(nameThree)).toEqual(["lolol","ww"]);
  });

  test("validateNames: 예외입력 - 이름이 5글자 이하가 아닌 경우", () => {
    const nameOne = "kogi,A,zero, ";
    const nameTwo = "good,word,gods,wowwwn";

    expect(() => ValidateInput.validateNames(nameOne)).toThrow();
    expect(() => ValidateInput.validateNames(nameTwo)).toThrow();
  });

  test("validateNames: 예외입력 - 영어 이외의 다른 문자가 들어간 경우", () => {
    const nameOne = "kogi,A,zero,김이박";
    const nameTwo = "good,word,go1ds,wow3ww";

    expect(() => ValidateInput.validateNames(nameOne)).toThrow();
    expect(() => ValidateInput.validateNames(nameTwo)).toThrow();
  });

  test("validateNames: 예외입력 - 중복된 이름이 있는 경우", () => {
    const nameOne = "kogi,A,zero,김이박,A";
    const nameTwo = "good,word,go1ds,wow3ww,good";

    expect(() => ValidateInput.validateNames(nameOne)).toThrow();
    expect(() => ValidateInput.validateNames(nameTwo)).toThrow();
  });

  test("validateNames: 예외입력 - 예외적인 경우", () => {
    const nameOne = null;
    const nameTwo = "One";

    expect(() => ValidateInput.validateNames(nameOne)).toThrow();
    expect(() => ValidateInput.validateNames(nameTwo)).toThrow();
  });

  test("validateTimes: 정상적인 입력", () => {
    const TimeOne = "8";
    const TimeTwo = "30";
    const TimeThree = "100";

    expect(ValidateInput.validateTimes(TimeOne)).toBe(8);
    expect(ValidateInput.validateTimes(TimeTwo)).toBe(30);
    expect(ValidateInput.validateTimes(TimeThree)).toBe(100);
  });

  test("validateTimes: 예외입력 - 양수가 아닌 경우 (0 이하인 경우)", () => {
    const TimeOne = "0";
    const TimeTwo = "-12";
    const TimeThree = "-100";

    expect(() => ValidateInput.validateTimes(TimeOne)).toThrow();
    expect(() => ValidateInput.validateTimes(TimeTwo)).toThrow();
    expect(() => ValidateInput.validateTimes(TimeThree)).toThrow();
  });

  test("validateTimes: 예외입력 - 문자를 입력한 경우", () => {
    const TimeOne = "10a";
    const TimeTwo = "str";
    const TimeThree = "zero1";

    expect(() => ValidateInput.validateTimes(TimeOne)).toThrow();
    expect(() => ValidateInput.validateTimes(TimeTwo)).toThrow();
    expect(() => ValidateInput.validateTimes(TimeThree)).toThrow();
  });

  test("validateTimes: 예외입력 - 예외적인 경우", () => {
    const TimeOne = null;
    const TimeTwo = "";

    expect(() => ValidateInput.validateTimes(TimeOne)).toThrow();
    expect(() => ValidateInput.validateTimes(TimeTwo)).toThrow();
  });
});
