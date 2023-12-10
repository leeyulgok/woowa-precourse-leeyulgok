import MENU_LIST from "../constants/MenuList.js";

class WeekdayDiscount {
  calculate(orderedMenu) {
    const DEFAULT_DISCOUNT = 2023;

    let discount = 0;
    orderedMenu.menuList.forEach((menu) => {
      if (MENU_LIST[menu.menu].category === "desserts") {
        discount += menu.count * DEFAULT_DISCOUNT;
      }
    });

    return discount;
  }
}

export default WeekdayDiscount;
