function productExceptSelf(nums: number[]): number[] {
  let ans: number[] = [];
  let pre = 1;
  for (let i = 0; i < nums.length; i++) {
    ans.push(pre);
    pre *= nums[i];
  }
  pre = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= pre;
    pre *= nums[i];
  }
  return ans;
}
