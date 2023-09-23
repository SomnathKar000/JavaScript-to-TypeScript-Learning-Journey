function maxOperations(nums: number[], k: number): number {
  let count = 0,
    l = 0,
    r = nums.length - 1;
  nums = nums.sort((a, b) => a - b);
  while (l < r) {
    let val = nums[l] + nums[r];
    if (val === k) {
      count++;
      l++;
      r--;
    } else if (val > k) r--;
    else l++;
  }
  return count;
}
