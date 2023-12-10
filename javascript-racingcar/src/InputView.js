import INPUT_MESSAGES from "../constants/InputMessages.js";
import ValidateInput from "./ValidateInput.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readCarNames() {
    return await readInput(INPUT_MESSAGES.CAR_NAMES, ValidateInput.validateNames);
  },

  async readRacingTimes() {
    return await readInput(INPUT_MESSAGES.RACING_TIMES, ValidateInput.validateTimes);
  }
};

const readInput = async (msg, validateFn) => {
  try {
    const input = await Console.readLineAsync(msg);
    return validateFn(input);
  } catch (error) {
    throw error;
  }
}

export default InputView;