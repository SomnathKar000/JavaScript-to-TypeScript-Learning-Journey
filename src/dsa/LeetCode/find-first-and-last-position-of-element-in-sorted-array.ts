const binarySearch = (
  nums: number[],
  target: number,
  side: boolean
): number => {
  let i = -1,
    l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) r = mid - 1;
    else if (nums[mid] < target) l = mid + 1;
    else {
      i = mid;
      if (side) r = mid - 1;
      else l = mid + 1;
    }
  }
  return i;
};

function searchRange(nums: number[], target: number): number[] {
  let l = binarySearch(nums, target, true);
  let r = binarySearch(nums, target, false);
  return [l, r];
}
