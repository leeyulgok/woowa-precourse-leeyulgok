import ERROR_MESSAGES from "../constants/ErrorMessages.js";

export const checkRacingNames = (names) => {
  if(names.length < 2) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME);
  }
};

export const checkName = (name) => {
  const regex = /^[A-Za-z]{1,5}$/;

  if(!regex.test(name) || name === null) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME);
  }
};

export const checkDupliNames = (names) => {
  const newNames = new Set(names);

  if(newNames.size !== names.length) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME);
  }
}

export const checkNumber = (input) => {
  const regex = /^\d+$/;

  if(!regex.test(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_TIMES);
  }
};

export const checkTimes = (input) => {
  const times = parseInt(input, 10);

  if(times <= 0 || isNaN(times)) {
    throw new Error(ERROR_MESSAGES.INVALID_TIMES);
  }

  return times;
}