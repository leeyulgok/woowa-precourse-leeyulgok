import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import EventDiscount from "./EventDiscount.js";
import { createOrderedMenuList, formattedDate } from "./format.js";

const Progress = {
  printStart() {
    OutputView.printHello();
  },

  async getDate() {
    const date = await InputView.readDate();
    return formattedDate(date);
  },

  async getMenuList() {
    const menuStr = await InputView.readMenuList();
    return createOrderedMenuList(menuStr);
  },

  printDateEvent(date) {
    OutputView.printDateEvent(date);
  },

  printOrderedMenuAndPrice(orderedMenu) {
    OutputView.printOrderedMenu(orderedMenu);
    OutputView.printTotalPrice(orderedMenu);
  },

  createEventDiscount(date, orderedMenu) {
    if (orderedMenu.totalPrice >= 10000) {
      return new EventDiscount(date, orderedMenu);
    }
    return null;
  },

  printGiftMenu(eventDiscount) {
    let gift = "없음";

    if (eventDiscount !== null) {
      gift = eventDiscount.gift;
    }

    OutputView.printGiftMenu(gift);
  },

  printDiscountList(date, eventDiscount) {
    OutputView.printEventList();
    if (eventDiscount !== null) {
      this.hasDiscount(eventDiscount.christmasCountdown, OutputView.printChristmasCountdown);
      this.hasDiscount(eventDiscount.weekDiscount, OutputView.printWeekDiscount, date);
      this.hasDiscount(eventDiscount.special, OutputView.printSpecial);
      this.hasDiscount(eventDiscount.gift.price, OutputView.printGift);
    } else {
      OutputView.printNothing();
    }
  },

  hasDiscount(discount, printFn, arg) {
    if(discount !== 0) {
      if(arg) {
        return printFn(arg, discount);
      }
      printFn(discount);
    }
  },

  printTotalDiscount(eventDiscount) {
    OutputView.printTotalDiscount(eventDiscount.totalDiscount);
  },

  printAfterPrice(orderedMenu, eventDiscount) {
    const price = orderedMenu.totalPrice
                    - eventDiscount.totalDiscount
                    + eventDiscount.gift.price
    OutputView.printAfterPrice(price);
  },

  printBadge(eventDiscount) {
    OutputView.printBadge(eventDiscount.badge);
  }
};

export default Progress;
