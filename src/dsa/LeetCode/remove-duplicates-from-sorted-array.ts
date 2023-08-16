let nums4: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums: number[]): number {
  let left: number = 1;
  let right: number = 1;
  while (right < nums.length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }

  return left;
}

console.log(removeDuplicates(nums4));
