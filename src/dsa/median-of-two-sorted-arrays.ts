let nums1: number[] = [3];
let nums3: number[] = [-2, -1];

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let result: number = 0;
  let nums: number[] = [];
  let right: number = 0;
  let left: number = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      nums.push(nums1[left]);
      left++;
    } else {
      nums.push(nums2[right]);
      right++;
    }
  }
  nums = [...nums, ...nums1.slice(left), ...nums2.slice(right)];

  let mid1: number = Math.floor((nums.length - 1) / 2);
  let mid2: number = Math.round((nums.length - 1) / 2);
  if (mid1 === mid2) {
    console.log(mid1, nums);
    result = nums[mid1];
  } else {
    console.log(mid1, mid2, nums);
    result = (nums[mid1] + nums[mid2]) / 2;
  }
  return result;
}

console.log(findMedianSortedArrays(nums1, nums3));
