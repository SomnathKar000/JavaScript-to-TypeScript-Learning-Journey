/*You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.*/

nums = [2, 3, 1, 1, 4];

function canJump(nums: number[]): boolean {
  let leftmostReachable: number = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= leftmostReachable) {
      leftmostReachable = i;
    }
  }
  return leftmostReachable === 0;
}
