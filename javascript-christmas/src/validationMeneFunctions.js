import MENU_LIST from "../constants/MenuList.js";
import ERROR_MESSAGES from "../constants/ErrorMessages.js";
import { checkOnlyNumber } from "./validationFunctions.js";

export const checkMenuList = (input) => {
  const menuList = input.split(",");
  const newMenu = new Set();
  let containsNonDrink = false;
  let sumCount = 0;

  for (const menu of menuList) {
    checkInputType(menu);

    const [menuName, count] = menu.split("-");
    checkOnlyNumber(count);

    checkDuplicateMenu(newMenu, menuName);
    hasMenuList(menuName);

    if (!checkIsDrink(menuName)) {
      containsNonDrink = true;
    }

    sumCount += +count;
  }

  checkOverCount(sumCount);

  if (!containsNonDrink) {
    throw new Error(ERROR_MESSAGES.INVALID_MENU_LIST);
  }
};

export const checkInputType = (menu) => {
  const regex = /^[가-힣]+-[1-9]+$/;
  if (!regex.test(menu)) {
    throw new Error(ERROR_MESSAGES.INVALID_MENU_LIST);
  }
};

export const hasMenuList = (menuName) => {
  if (!(menuName in MENU_LIST)) {
    throw new Error(ERROR_MESSAGES.INVALID_MENU_LIST);
  }
};

export const checkOverCount = (sumCount) => {
  if (sumCount > 20) {
    throw new Error(ERROR_MESSAGES.INVALID_MENU_LIST);
  }
};

export const checkDuplicateMenu = (newMenu, menuName) => {
  if (newMenu.has(menuName)) {
    throw new Error(ERROR_MESSAGES.INVALID_MENU_LIST);
  }
  newMenu.add(menuName);
};

export const checkIsDrink = (menuName) => {
  const IS_DRINK = "drinks";
  if (MENU_LIST[menuName].category !== IS_DRINK) {
    return false;
  }
  return true;
};
