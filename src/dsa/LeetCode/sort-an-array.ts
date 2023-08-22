const mergeArr = (nums1: number[], nums2: number[]): number[] => {
  let merge: number[] = [];
  let l = 0,
    r = 0;
  while (l < nums1.length && r < nums2.length) {
    if (nums1[l] > nums2[r]) {
      merge.push(nums2[r]);
      r++;
    } else {
      merge.push(nums1[l]);
      l++;
    }
  }
  merge = [...merge, ...nums1.slice(l), ...nums2.slice(r)];
  return merge;
};

function sortArray(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  return mergeArr(sortArray(left), sortArray(right));
}
