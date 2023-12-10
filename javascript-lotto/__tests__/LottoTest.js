import Lotto from "../src/Lotto";

describe("Lotto 단위 테스트", () => {
  test("Lotto 인스턴스 생성", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = "7";

    const lotto = new Lotto(numbers, bonusNumber);

    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.numbers).toEqual(numbers);
    expect(lotto.bonusNumber).toBe(bonusNumber);
  });
});