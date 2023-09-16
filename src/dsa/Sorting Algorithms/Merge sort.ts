const MergeArr = (left: number[], right: number[]): number[] => {
  let l = 0,
    r = 0,
    arr: number[] = [];
  while (l < left.length && r < right.length) {
    if (left[l] > right[r]) arr.push(right[r++]);
    else arr.push(left[l++]);
  }
  arr = [...arr, ...left.slice(l), ...right.slice(r)];
  return arr;
};

const MergeSort = (nums: number[]): number[] => {
  if (nums.length === 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let leftArr = nums.slice(0, mid);
  let rightArr = nums.slice(mid);
  return MergeArr(MergeSort(leftArr), MergeSort(rightArr));
};
