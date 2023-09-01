function maxFrequency(nums: number[], k: number): number {
  let max = -Infinity;
  nums = nums.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    total = 0;

  while (j < nums.length) {
    total += nums[j];

    if ((j - i + 1) * nums[j] > total + k) {
      total -= nums[i];
      i++;
    } else {
      max = Math.max(max, j - i + 1);
    }

    j++;
  }

  return max;
}
