function mySqrt(x: number): number {
  let left = 0,
    right = x;
  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);
    if (mid * mid <= x) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}
