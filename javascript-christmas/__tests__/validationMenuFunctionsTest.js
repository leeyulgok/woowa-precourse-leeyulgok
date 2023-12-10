import { checkMenuList, hasMenuList, checkDuplicateMenu, checkOverCount, checkIsDrink, checkInputType } from "../src/validationMeneFunctions";
import ERROR_MESSAGES from "../constants/ErrorMessages";

describe("validationMenuFunctions 단위 테스트", () => {
  let newMenu;

  beforeEach(() => {
    newMenu = new Set();
    newMenu.add("양송이수프"); 
  });

  test("checkMenuList: 정상적인 입력", () => {
    const inputOne = "양송이수프-1,해산물파스타-1,제로콜라-1";
    const inputTwo = "타파스-1,티본스테이크-2,샴페인-1";
    const inputThree = "시저샐러드-5,초코케이크-2,레드와인-1";

    expect(() => checkMenuList(inputOne)).not.toThrow();
    expect(() => checkMenuList(inputTwo)).not.toThrow();
    expect(() => checkMenuList(inputThree)).not.toThrow();
  });

  test("checkMenuList: 예외입력 - ',' 구분자가 옳바르지 않은 경우", () => {
    const inputOne = "양송이수프-1|해산물파스타-1|제로콜라-1";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkMenuList: 예외입력 - 입력 형태가 옳바르지 않은 경우", () => {
    const inputOne = "양송이수프1,해산물파스타-1,제로콜라-1";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkMenuList: 예외입력 - 수량을 잘못 입력하는 경우", () => {
    const inputOne = "양송이수프-하나,해산물파스타-0,제로콜라-1";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkMenuList: 예외입력 - 음료만 주문한 경우", () => {
    const inputOne = "샴페인-1,레드와인-1,제로콜라-1";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkMenuList: 예외입력 - 주문수량이 20개를 넘을 경우", () => {
    const inputOne = "양송이수프-10,해산물파스타-9,제로콜라-2";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkMenuList: 예외입력 - 메뉴판에 없는 메뉴를 주문한 경우", () => {
    const inputOne = "양송이찜-1,해산물파스타-1,제로콜라-1";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkMenuList: 예외입력 - 중복되는 메뉴를 주문할 경우", () => {
    const inputOne = "양송이수프-1,양송이수프-1,제로콜라-1";
    expect(() => checkMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkInputType: 정상적인 입력", () => {
    const input = "타파스-1";

    expect(() => checkInputType(input)).not.toThrow();
  });

  test("checkInputType: 중복 메뉴 입력한 경우", () => {
    const input = "양송이수프|1";

    expect(() => checkInputType(input)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("hasMenuList: 정상적인 입력", () => {
    const inputOne = "양송이수프";
    const inputTwo = "티본스테이크";
    const inputThree = "초코케이크";

    expect(() => hasMenuList(inputOne)).not.toThrow();
    expect(() => hasMenuList(inputTwo)).not.toThrow();
    expect(() => hasMenuList(inputThree)).not.toThrow();
  });

  test("hasMenuList: 메뉴판에 없는 메뉴를 입력한 경우", () => {
    const inputOne = "양송이찜";
    expect(() => hasMenuList(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkDuplicateMenu: 정상적인 입력", () => {
    const input = "타파스";

    expect(() => checkDuplicateMenu(newMenu, input)).not.toThrow();
  });

  test("checkDuplicateMenu: 중복 메뉴 입력한 경우", () => {
    const input = "양송이수프";

    expect(() => checkDuplicateMenu(newMenu, input)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkOverCount: 정상적인 입력", () => {
    const inputOne = 20;
    const inputTwo = 10;
    const inputThree = 15;

    expect(() => checkOverCount(inputOne)).not.toThrow();
    expect(() => checkOverCount(inputTwo)).not.toThrow();
    expect(() => checkOverCount(inputThree)).not.toThrow();
  });

  test("checkOverCount: 수량이 20개를 넘길 경우", () => {
    const inputOne = 21;
    expect(() => checkOverCount(inputOne)).toThrow(ERROR_MESSAGES.INVALID_MENU_LIST);
  });

  test("checkIsDrink: 음료를 주문한 경우", () => {
    const inputOne = "제로콜라";
    expect(() => checkIsDrink(inputOne)).toBeTruthy();
  });
});