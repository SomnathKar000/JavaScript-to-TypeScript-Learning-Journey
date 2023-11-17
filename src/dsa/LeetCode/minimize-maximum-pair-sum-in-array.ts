function minPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let l = 0,
    r = nums.length - 1,
    max = -Infinity;
  while (l < r) max = Math.max(nums[l++] + nums[r--], max);
  return max;
}
