class Car {
  #name
  #position

  constructor(name) {
    this.#validName(name);
    this.#name = name;
    this.#position = '';
  }

  #validName(name) {
    if(name.length > 5) {
      throw new Error("[ERROR] 유효하지 않은 이름입니다.");
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  setPosition() {
    this.#position += "-";
  }
};

export default Car;