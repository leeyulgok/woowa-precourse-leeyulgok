import Car from "../src/Car";

describe("Car 단위 테스트", () => {
  test("Car 인스턴스 생성", () => {
    const name = "One";
    const car = new Car(name);

    expect(car).toBeInstanceOf(Car);
    expect(car.name).toBe(name);
    expect(car.position).toBe("");
  });

  test("Car : setPosition으로 현재 위치 변경", () => {
    const name = "One";
    const car = new Car(name);

    car.setPosition();
    
    expect(car.position).toBe("-");
  });

  test("Car : 유효하지 않은 이름 입력", () => {
    const name = "OneTwo";
    
    expect(() => new Car(name)).toThrow();
  });
});