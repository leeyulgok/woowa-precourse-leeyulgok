import { Random } from "@woowacourse/mission-utils";
import { getIsGo } from "../src/utilsFunctions.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("utilsFunctions 단위 테스트", () => {
  test("getIsGo: 전진하는 경우(4 이상)", () => {
    Random.pickNumberInRange.mockReturnValueOnce(4);
    expect(getIsGo()).toBeTruthy();
  });

  test("getIsGo: 전진하지 못하는 경우(4 미만)", () => {
    Random.pickNumberInRange.mockReturnValueOnce(3);
    expect(getIsGo()).toBeFalsy();
  });
});
