function arrangeCoins(n: number): number {
  let left = 1,
    right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coins = (mid * (mid + 1)) / 2;
    if (coins === n) return mid;
    else if (coins > n) right = mid - 1;
    else left = mid + 1;
  }
  return left - 1;
}
