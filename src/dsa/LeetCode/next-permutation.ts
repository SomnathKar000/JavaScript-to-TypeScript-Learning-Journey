function nextPermutation(nums: number[]): void {
  let ind = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i;
      break;
    }
  }
  if (ind === -1) {
    nums = nums.reverse();
    return;
  }

  for (let i = nums.length - 1; i > ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[ind], nums[i]] = [nums[i], nums[ind]];
      break;
    }
  }
  let left = ind + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
