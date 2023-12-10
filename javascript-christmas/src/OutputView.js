import { Console } from "@woowacourse/mission-utils";
import OUTPUT_MESSAGES from "../constants/OutputMessages.js";
import { formmatMoney } from "./format.js";

const OutputView = {
  printHello() {
    Console.print(OUTPUT_MESSAGES.HELLO);
  },

  printDateEvent(date) {
    const [month, day] = date.split("-");
    Console.print(`${month}월${day}일` + OUTPUT_MESSAGES.DATE_EVENT);
  },

  printOrderedMenu(orderedMenu) {
    Console.print(OUTPUT_MESSAGES.ORDERED_MENU);
    orderedMenu.menuList.forEach((menu) => Console.print(`${menu.menu} ${menu.count}개`));
  },

  printTotalPrice(orderedMenu) {
    Console.print(OUTPUT_MESSAGES.BEFORE_TOTAL_PRICE);
    Console.print(formmatMoney(orderedMenu.totalPrice));
  },

  printGiftMenu(gift) {
    Console.print(OUTPUT_MESSAGES.GIFT_MENU);
    if (gift.menu === "없음" || gift === "없음") {
      Console.print(`${gift.menu}`);
    } else {
      Console.print(`${gift.menu} ${gift.count}개`);
    }
  },

  printEventList() {
    Console.print(OUTPUT_MESSAGES.EVNET_LIST);
  },

  printChristmasCountdown(christmasCountdown) {
    Console.print(`크리스마스 디데이 할인: -${formmatMoney(christmasCountdown)}`);
  },

  printWeekDiscount(date, weekDiscount) {
    const day = date.split("-")[2];
    if(day === "5" || day === "6") {
      Console.print(`주말 할인: -${formmatMoney(weekDiscount)}`);
    } else {
      Console.print(`평일 할인: -${formmatMoney(weekDiscount)}`);
    }
  },
  
  printSpecial(special) {
    Console.print(`특별 할인: -${formmatMoney(special)}`);
  },

  printGift(price) {
    Console.print(`증정 이벤트: -${formmatMoney(price)}`);
  },

  printNothing() {
    Console.print(OUTPUT_MESSAGES.NOTHING);
  },

  printTotalDiscount(totalDiscount) {
    Console.print(OUTPUT_MESSAGES.TOTAL_DISCOUNT);
    Console.print(`-${formmatMoney(totalDiscount)}`);
  },

  printAfterPrice(price) {
    Console.print(OUTPUT_MESSAGES.AFTER_PRICE);
    Console.print(`${formmatMoney(price)}`);
  },

  printBadge(badge) {
    Console.print(OUTPUT_MESSAGES.BADGE);
    Console.print(`${badge}`);
  }
};

export default OutputView;
