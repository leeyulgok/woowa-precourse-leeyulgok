import { Console } from "@woowacourse/mission-utils";
import { lottoNumberFormat } from "./format.js";
import OUTPUT_MESSAGES from "../constants/OutputMessages.js";

const OutputView = {
  printLottosNumber(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`${lottoNumberFormat(lotto.numbers)}`));
  },

  printResult(result) {
    Console.print(OUTPUT_MESSAGES.RESULT);
    Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
  },

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
};

export default OutputView;