function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let current = x,
    res = 1;
  while (n > 0) {
    if (n % 2 === 1) res *= current;
    current *= current;
    n = Math.floor(n / 2);
  }
  return res;
}
