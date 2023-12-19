function maxProductDifference(nums: number[]): number {
  let a = Infinity,
    b = Infinity,
    c = 0,
    d = 0;

  for (const num of nums) {
    if (num > d) {
      c = d;
      d = num;
    } else if (num > c) {
      c = num;
    }
    if (num < a) {
      b = a;
      a = num;
    } else if (num < b) {
      b = num;
    }
  }

  return Math.abs(a * b - c * d);
}
