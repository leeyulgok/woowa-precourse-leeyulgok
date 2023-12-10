import ERROR_MESSAGES from "../constants/ErrorMessages.js";

export const checkNumberType = (input) => {
  const regex = /^[1-9]\d*$/;

  if(!regex.test(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
}

export const checkMoney = (input) => {
  const LOTTO_AMOUNT = 1000;
  const money = parseInt(input, 10);

  if(money % LOTTO_AMOUNT !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_MONEY);
  }

  return money;
}

export const checkLottoNumber = (input) => {
  const number = parseInt(input, 10);
  
  if(number <= 0 || number > 45 || isNaN(number)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
}

export const checkLottoNumbers = (numbers) => {
  const LOTTO_LENGTH = 6;
  if(numbers.length !== LOTTO_LENGTH) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }  
}

export const checkDupliLottoNumber = (numbers) => {
  const newNumbers = new Set(numbers);

  if(newNumbers.size !== numbers.length) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
}

export const checkBonusNumber = (numbers, input) => {
  const bonusNumber = parseInt(input, 10);
  
  if(numbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }

  return bonusNumber;
}