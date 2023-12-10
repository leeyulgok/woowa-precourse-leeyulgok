class SpecialDiscount {
  calculate(day, week) {
    const DEFAULT_DISCOUNT = 1000;
    let discount = 0;
    if (day === "25" || week === "0") {
      discount += DEFAULT_DISCOUNT;
    }

    return discount;
  }
}

export default SpecialDiscount;
