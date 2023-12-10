import { Console } from "@woowacourse/mission-utils";
import INPUT_MESSAGES from "../constants/InputMessages.js";
import ValidateInput from "./ValidateInput.js";

const InputView = {
  async readDate() {
    return await readInput(INPUT_MESSAGES.DATE, ValidateInput.validateDate);
  },

  async readMenuList() {
    return await readInput(INPUT_MESSAGES.MENU_LIST, ValidateInput.validateMenuList);
  }
};

const readInput = async (msg, validationFn) => {
  let firstMsg = true;

  while (true) {
    try {
      const input = await Console.readLineAsync(firstMsg ? msg : "");
      return validationFn(input);
    } catch (error) {
      Console.print(`${error.message}`);
      firstMsg = false;
    }
  }
};

export default InputView;
