function findPeakElement(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (m > 0 && nums[m] < nums[m - 1]) r = m - 1;
    else if (m < nums.length && nums[m] < nums[m + 1]) l = m + 1;
    else return m;
  }
  return -1;
}
