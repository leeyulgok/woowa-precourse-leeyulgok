import { checkDupliNames, checkName, checkNumber, checkRacingNames, checkTimes } from "./validationFunctions.js";

const ValidateInput = {
  validateNames(input) {
    const names = input.split(",");

    checkRacingNames(names);
    names.forEach(name => (checkName(name)));
    checkDupliNames(names);

    return names;
  },

  validateTimes(input) {
    checkNumber(input);
    
    return checkTimes(input);
  },
};

export default ValidateInput;