function minSubArrayLen(target: number, nums: number[]): number {
  let ptr1 = 0,
    ptr2 = 0,
    min = Infinity,
    sum = 0;
  while (ptr2 < nums.length) {
    sum += nums[ptr2];
    while (sum >= target) {
      min = Math.min(min, ptr2 - ptr1 + 1);
      sum -= nums[ptr1];
      ptr1++;
    }
    ptr2++;
  }
  return min === Infinity ? 0 : min;
}
