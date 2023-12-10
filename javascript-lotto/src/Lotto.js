class Lotto {
  #numbers;
  #bonusNumber

  constructor(numbers, bonusNumber = null) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  get numbers() {
    return this.#numbers
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default Lotto;
