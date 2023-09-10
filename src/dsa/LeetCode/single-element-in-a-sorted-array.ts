function singleNonDuplicate(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (mid % 2 === 1) {
      mid--;
    }
    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid;
    }
  }
  return nums[l];
}
