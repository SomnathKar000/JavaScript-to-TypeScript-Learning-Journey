let prices2: number[] = [7, 1, 5, 3, 6, 4];

function maxProfit(prices: number[]): number {
  let maxPrice = 0;
  let temp: number = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > temp) {
      let profit = prices[i] - temp;
      maxPrice += profit;
    }
    temp = prices[i];
  }

  return maxPrice;
}
