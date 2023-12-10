import ERROR_MESSAGES from "../constants/ErrorMessages.js";

export const checkOnlyNumber = (input) => {
  const regex = /^[1-9]+$/;

  if(!regex.test(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  };
};

export const checkBaseballNumber = (number) => {
  const newNumber = new Set(number);

  if(number.length !== 3 || newNumber.size !== number.length || number.includes("0")) {
    throw new Error(ERROR_MESSAGES.INVALID_BASEBALL_NUMBER);
  }
};

export const checkGameRestart = (number) => {
  if(number === "1") {
    return true;
  } else if(number === "2") {
    return false;
  } else {
    throw new Error(ERROR_MESSAGES.INVALID_RESTART)
  }
};
