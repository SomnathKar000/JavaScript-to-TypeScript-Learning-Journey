function longestOnes(nums: number[], k: number): number {
  let left = 0,
    right = 0,
    count = 0,
    max = 0;
  while (right < nums.length) {
    if (nums[right] === 0) count++;
    while (count > k) {
      if (nums[left] === 0) count--;
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}
