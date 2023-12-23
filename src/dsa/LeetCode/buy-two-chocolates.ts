function buyChoco(prices: number[], money: number): number {
  let min = Infinity,
    secondMin = Infinity;
  for (const num of prices) {
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin) {
      secondMin = num;
    }
  }
  const cocolates = money - (secondMin + min);
  return cocolates >= 0 ? cocolates : money;
}
