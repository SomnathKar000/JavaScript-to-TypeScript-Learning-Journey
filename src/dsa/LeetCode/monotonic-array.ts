function isMonotonic(nums: number[]): boolean {
  let increasing = false;
  let decreasing = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) decreasing = true;
    else if (nums[i] < nums[i + 1]) increasing = true;
    if (increasing && decreasing) return false;
  }
  return true;
}
