import Progress from "./Progress.js";

class App {
  async run() {
    Progress.printStart();

    const date = await Progress.getDate();
    const orderedMenu = await Progress.getMenuList();

    Progress.printDateEvent(date);
    Progress.printOrderedMenuAndPrice(orderedMenu);
    
    const eventDiscount = Progress.createEventDiscount(date, orderedMenu);
    Progress.printGiftMenu(eventDiscount);
    Progress.printDiscountList(date, eventDiscount);
    Progress.printTotalDiscount(eventDiscount);
    Progress.printAfterPrice(orderedMenu, eventDiscount);
    Progress.printBadge(eventDiscount);
  };
};

export default App;