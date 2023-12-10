import { checkOnlyNumber, checkBaseballNumber, checkGameRestart } from './validationFunctions.js';

const ValidateInput = {
  validateUserNumber(input) {
    checkOnlyNumber(input);
    checkBaseballNumber(input);
    
    return input;
  },

  validateRestart(input) {
    checkOnlyNumber(input);
    return checkGameRestart(input);
  },
};

export default ValidateInput;
