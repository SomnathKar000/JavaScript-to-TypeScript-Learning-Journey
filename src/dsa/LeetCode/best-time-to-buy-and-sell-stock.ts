let prices: number[] = [7, 1, 5, 3, 6, 4];

function maxProfit(prices: number[]): number {
  let min: number = prices[0];
  let result: number = 0;
  for (let i: number = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    let temp: number = prices[i] - min;
    if (temp > result) {
      result = temp;
    }
  }

  return result;
}

console.log(maxProfit(prices));
