function search(nums: number[], target: number): boolean {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] === nums[l] && nums[r] === nums[mid]) {
      l++;
      r--;
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[r] >= target && target > nums[mid]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return false;
}
