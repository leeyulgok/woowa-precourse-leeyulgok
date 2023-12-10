export const lottoNumberFormat = (numbers) => {
  return `[${Object.values(numbers).join(", ")}]`;
};

export const profitFormat = (profit, money) => {
  const formattedNumber = ((profit / money) * 100).toFixed(1);

  return parseFloat(formattedNumber).toLocaleString("ko-KR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};
