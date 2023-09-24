function findDifference(nums1: number[], nums2: number[]): number[][] {
  let set1 = new Set<number>(nums1);
  let set2 = new Set<number>(nums2);
  let left: number[] = [...set1].filter((x) => !set2.has(x));
  let right: number[] = [...set2].filter((x) => !set1.has(x));

  return [left, right];
}
