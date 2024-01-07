function lengthOfLIS(nums: number[]): number {
  let arr = new Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        arr[i] = Math.max(arr[i], 1 + arr[j]);
      }
    }
  }
  return Math.max(...arr);
}
