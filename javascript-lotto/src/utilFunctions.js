import { Random } from "@woowacourse/mission-utils";
import PROFIT_MONEY from "../constants/ProfitMoney.js";
import { profitFormat } from "./format.js";

export const createNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

export const winningResult = (lottos, winningLotto) => {
  let result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  lottos.forEach((lotto) => {
    const matchCount = lotto.numbers.filter((number) =>
      winningLotto.numbers.includes(number)
    ).length;
    const isBonusMatch = lotto.numbers.includes(winningLotto.bonusNumber);

    if (matchCount === 6) {
      result.first++;
    } else if (matchCount === 5 && isBonusMatch) {
      result.second++;
    } else if (matchCount === 5) {
      result.third++;
    } else if (matchCount === 4) {
      result.fourth++;
    } else if (matchCount === 3) {
      result.fifth++;
    }
  });

  return result;
};

export const calculateProfit = (result, money) => {
  let profit = 0;

  for (const rank in result) {
    switch (rank) {
      case "first":
        profit += result[rank] * PROFIT_MONEY.FIRST;
        break;
      case "second":
        profit += result[rank] * PROFIT_MONEY.SECOND;
        break;
      case "third":
        profit += result[rank] * PROFIT_MONEY.THIRD;
        break;
      case "fourth":
        profit += result[rank] * PROFIT_MONEY.FOURTH;
        break;
      case "fifth":
        profit += result[rank] * PROFIT_MONEY.FIFTH;
        break;
    }
  }

  return profitFormat(profit, money);
};
