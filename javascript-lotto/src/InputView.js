import INPUT_MESSAGES from "../constants/InputMessages.js";
import ValidateInput from "./ValidateInput.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readMoney() {
    return await readInput(INPUT_MESSAGES.MONEY, ValidateInput.validateMoney);
  },

  async readWinningNumbers() {
    return await readInput(INPUT_MESSAGES.WINNING_NUMBERS, ValidateInput.validateWinningNumbers);
  },

  async readBonusNumber(winningNumbers) {
    return await readInput(INPUT_MESSAGES.BONUS_NUMBER, ValidateInput.validateBonusNumber, winningNumbers);
  }
};

const readInput = async (msg, validateFn, arg) => {
  let firstMsg = true;
  while (true) {
    try {
      const input = await Console.readLineAsync(firstMsg ? msg : "");

      if(arg) {
        return validateFn(input, arg);
      }

      return validateFn(input);
    } catch (error) {
      Console.print(`${error.message}`);
      firstMsg = false
    }
  }
};

export default InputView;
