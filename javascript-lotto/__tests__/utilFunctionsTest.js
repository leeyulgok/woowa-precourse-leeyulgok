import { createNumbers } from "../src/utilFunctions";

describe("utilFunctions 단위 테스트", () => {
  const checkLottoNumbers = (numbers) => {
    numbers.forEach(number => {
      if(number <= 0 || number > 45) {
        throw new Error("[ERROR]");
      }
    })
  };

  test("createNumbers: 정상 테스트", () => {
    const numbers = createNumbers();

    expect(numbers).toHaveLength(6);
    expect(() => checkLottoNumbers(numbers)).not.toThrow();
  });
});