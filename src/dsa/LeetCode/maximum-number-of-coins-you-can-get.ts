function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  let num = 0;
  let left = 0,
    right = piles.length - 2;
  while (left < right) {
    num += piles[right];
    right -= 2;
    left++;
  }
  return num;
}
