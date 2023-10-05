function reverse(x: number): number {
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);
  let num = 0;
  while (x !== 0) {
    let l = x % 10;
    if (num > Math.trunc(max / 10) || num < Math.trunc(min / 10)) return 0;
    num *= 10;
    num += l;
    x = Math.trunc(x / 10);
  }
  return num;
}
