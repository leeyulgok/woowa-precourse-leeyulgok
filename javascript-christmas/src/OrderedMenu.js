import MENU_LIST from "../constants/MenuList.js";

class OrderedMenu {
  #menuList;
  #totalPrice;

  constructor(menuList) {
    this.#menuList = menuList;
    this.#totalPrice = 0;
    this.#findPrice(menuList);
  }

  get menuList() {
    return this.#menuList;
  }

  get totalPrice() {
    return this.#totalPrice;
  }

  #findPrice(menuList) {
    for (const menu of menuList) {
      this.#totalPrice += MENU_LIST[menu.menu].price * menu.count;
    }

    return this.#totalPrice;
  }
}

export default OrderedMenu;
