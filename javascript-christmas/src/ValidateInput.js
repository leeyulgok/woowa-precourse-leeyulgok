import { checkOnlyNumber, checkDate } from "./validationFunctions.js";
import { checkMenuList } from "./validationMeneFunctions.js";

const ValidateInput = {
  validateDate(input) {
    checkOnlyNumber(input);
    checkDate(input);
    
    return input;
  },

  validateMenuList(input) {
    checkMenuList(input);

    return input;
  }
};

export default ValidateInput;
