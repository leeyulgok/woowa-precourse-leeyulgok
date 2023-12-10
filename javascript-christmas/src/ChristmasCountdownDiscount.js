class ChristmasCountdownDiscount {
  calculate(day) {
    if(day < 26) {
      const DEFAULT_INCREMENT = 100;
      let disount = 1000;
    
      return disount + (day - 1) * DEFAULT_INCREMENT;
    }
    return 0;
  }
}

export default ChristmasCountdownDiscount;
