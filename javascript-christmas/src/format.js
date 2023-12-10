import OrderedMenu from "./OrderedMenu.js";

export const formattedDate = (date) => {
  const YEAR = 2023;
  const MONTH = 11;

  const newDate = new Date(YEAR, MONTH, date);

  const formattedDate = `${newDate.getMonth() + 1}-${newDate.getDate()}-${newDate.getDay()}`;

  return formattedDate;
};

export const createOrderedMenuList = (menuStr) => {
  const menuList = menuStr.split(",").map(menu => {
    const [menuName, count] = menu.split("-");
    return {menu: menuName, count: parseInt(count, 10)};
  });

  return new OrderedMenu(menuList);
};

export const formmatMoney = (price) => {
  return `${parseInt(price, 10).toLocaleString()}원`;
};