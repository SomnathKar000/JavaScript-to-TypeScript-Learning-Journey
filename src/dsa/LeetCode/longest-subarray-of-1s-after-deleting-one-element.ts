function longestSubarray(nums: number[]): number {
  let count = 0,
    left = 0,
    right = 0,
    max = 0;
  while (right < nums.length) {
    if (nums[right] === 0) count++;
    while (count > 1) {
      if (nums[left] === 0) count--;
      left++;
    }
    max = Math.max(max, right - left);
    right++;
  }
  return max === nums.length ? --max : max;
}
