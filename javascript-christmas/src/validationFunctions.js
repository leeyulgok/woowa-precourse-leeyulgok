import ERROR_MESSAGES from "../constants/ErrorMessages.js";

export const checkOnlyNumber = (input) => {
  const regex = /^[1-9]\d*$/;

  if(!regex.test(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
}

export const checkDate = (input) => {
  const date = parseInt(input, 10);

  if(date <= 0 || date > 31) {
    throw new Error(ERROR_MESSAGES.INVALID_DATE);
  }
}
