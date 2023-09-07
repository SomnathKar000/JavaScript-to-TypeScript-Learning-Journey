function sortedSquares(nums: number[]): number[] {
  let arr = [];
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let numL = nums[l] * nums[l];
    let numR = nums[r] * nums[r];
    if (numL > numR) {
      arr.push(numL);
      l++;
    } else {
      arr.push(numR);
      r--;
    }
  }
  return arr.reverse();
}
