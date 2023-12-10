import INPUT_MESSAGES from "../constants/InputMessages.js";
import { Console } from "@woowacourse/mission-utils";
import ValidateInput from "./ValidateInput.js";

const InputView = {
  async readUserNumber() {
    return await readInput(INPUT_MESSAGES.NUMBER, ValidateInput.validateUserNumber);
  },

  async readIsRestart() {
    return await readInput(INPUT_MESSAGES.RESTART, ValidateInput.validateRestart);
  }
};

const readInput = async (msg, validateFn) => {
  try {
    const input = await Console.readLineAsync(msg);
    return validateFn(input);
  } catch (error) {
    Console.print(`${error.message}`);
    throw error;
  }
}

export default InputView;
