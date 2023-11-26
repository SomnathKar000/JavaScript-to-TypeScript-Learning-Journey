function reductionOperations(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let temp = 0,
    res = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) temp++;

    res += temp;
  }
  return res;
}
