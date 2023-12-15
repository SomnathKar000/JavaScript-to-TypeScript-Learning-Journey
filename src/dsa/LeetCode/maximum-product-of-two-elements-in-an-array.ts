function maxProduct(nums: number[]): number {
  let higher = 1;
  let secondHigher = 1;
  for (const num of nums) {
    if (num > higher) {
      secondHigher = higher;
      higher = num;
    } else if (num > secondHigher) {
      secondHigher = num;
    }
  }
  return (higher - 1) * (secondHigher - 1);
}
