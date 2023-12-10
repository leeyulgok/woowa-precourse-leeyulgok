import {
  checkNumberType,
  checkMoney,
  checkLottoNumbers,
  checkLottoNumber,
  checkDupliLottoNumber,
  checkBonusNumber
} from "./validationFunctions.js";

const ValidateInput = {
  validateMoney(input) {
    checkNumberType(input);
    return checkMoney(input);
  },

  validateWinningNumbers(input) {
    const numbers = input.split(",");

    checkLottoNumbers(numbers);
    checkDupliLottoNumber(numbers);

    numbers.forEach((number) => {
      checkNumberType(number);
      checkLottoNumber(number);
    });

    return numbers.map((number) => parseInt(number, 10));
  },

  validateBonusNumber(input, winningNumbers) {
    checkNumberType(input);
    checkLottoNumber(input);
    return checkBonusNumber(winningNumbers, input);
  },
};

export default ValidateInput;
