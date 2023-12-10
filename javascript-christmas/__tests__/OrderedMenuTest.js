import OrderedMenu from "../src/OrderedMenu.js";

describe("OrderedMenu 단위 테스트", () => {
  let orderedMenu;
  const menuList = [
    { menu: "해산물파스타", count: "2" },
    { menu: "레드와인", count: "1" },
    { menu: "초코케이크", count: "1" },
  ];

  beforeEach(() => {
    orderedMenu = new OrderedMenu(menuList);
  });

  test("OrderedMenu 인스턴스 생성", () => {
    expect(orderedMenu).toBeInstanceOf(OrderedMenu);
    expect(orderedMenu.menuList).toEqual(menuList);
  });

  test("OrderedMenu 가격 가져오기", () => {
    expect(orderedMenu.totalPrice).toBe(145000);
  });
});
