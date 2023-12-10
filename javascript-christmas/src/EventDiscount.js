import ChristmasCountdownDiscount from "./ChristmasCountdownDiscount.js";
import WeekdayDiscount from "./WeekdayDiscount.js";
import WeekendDiscount from "./WeekendDiscount.js";
import SpecialDiscount from "./SpecialDiscount.js";

class EventDiscount {
  #gift;
  #badge;
  #totalDiscount;
  #christmasCountdown;
  #weekDiscount;
  #special;

  constructor(date, orderedMenu) {
    const [, day, week] = date.split("-");

    this.#gift = { menu: "없음", count: 1, price: 0 };
    this.#badge = "없음";
    this.#totalDiscount = 0;

    this.#christmasCountdown = new ChristmasCountdownDiscount().calculate(day);
    this.#weekDiscount =
      week === 5 || week === 6
        ? new WeekendDiscount().calculate(orderedMenu)
        : new WeekdayDiscount().calculate(orderedMenu);
    this.#special = new SpecialDiscount().calculate(day, week);
    

    this.#checkGift(orderedMenu);
    this.#calculateTotalDiscount();
    this.#assignBadge();
  }

  #checkGift(orderedMenu) {
    const GIFT_MONEY = 120000;
    if (orderedMenu.totalPrice >= GIFT_MONEY) {
      return (this.#gift = { menu: "샴페인", count: 1, price: 25000 });
    }
  }

  #calculateTotalDiscount() {
    this.#totalDiscount +=
      this.#christmasCountdown +
      this.#weekDiscount +
      this.#special +
      this.#gift.price;
  }

  #assignBadge() {
    if (this.#totalDiscount >= 20000) {
      this.#badge = "산타";
    } else if (this.#totalDiscount >= 10000) {
      this.#badge = "별";
    } else if (this.#totalDiscount >= 5000) {
      this.#badge = "트리";
    }
  }

  get gift() {
    return this.#gift;
  }

  get badge() {
    return this.#badge;
  }

  get christmasCountdown() {
    return this.#christmasCountdown;
  }

  get weekDiscount() {
    return this.#weekDiscount;
  }

  get special() {
    return this.#special;
  }

  get totalDiscount() {
    return this.#totalDiscount;
  }
}

export default EventDiscount;
