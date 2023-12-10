import { Random } from "@woowacourse/mission-utils";

export const createBaseballNumber = () => {
  const computer = [];
  const NUMBER_DIGITS = 3;
  
  while (computer.length < NUMBER_DIGITS) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer.join("");
};

export const compareNumber = (computerNumber, userNumber) => {
  const NUMBER_DIGITS = 3;
  let strikes = 0;
  let balls = 0;

  for(let i = 0; i < NUMBER_DIGITS; i++) {
    if(computerNumber[i] === userNumber[i]) {
      strikes += 1;
    } else if(computerNumber.includes(userNumber[i])) {
      balls += 1;
    }
  }

  return {strikes, balls}
};

export const formatResult = (result) => {
  let { strikes, balls } = result;
  
  if(strikes === 0 && balls === 0) {
    return "낫싱";
  } else if (balls === 0 && strikes > 0) {
    return `${strikes}스트라이크`
  } else if (balls > 0 && strikes === 0) {
    return `${balls}볼`
  } else if (balls > 0 && strikes > 0) {
    return `${balls}볼 ${strikes}스트라이크`
  }
}