import { Random } from "@woowacourse/mission-utils";

export const getIsGo = () => {
  return Random.pickNumberInRange(0, 9) >= 4 ? true : false;
};
