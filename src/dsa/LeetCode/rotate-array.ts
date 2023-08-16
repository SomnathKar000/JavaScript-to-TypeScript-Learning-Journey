// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums: number[], k: number): void {
  while (k > 0) {
    let pop: number | undefined = nums.pop();
    if (pop !== undefined) {
      nums.unshift(pop);
    }
    k--;
  }
}
