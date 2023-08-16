function majorityElement(nums: number[]): number {
  let map = new Map<number, number>();
  let max: { k: number; v: number } = { k: nums[0], v: 0 };
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let num: number = map.get(nums[i]);
      num++;
      if (num > max.v) {
        max.v = num;
        max.k = nums[i];
      }
      map.set(nums[i], num);
    } else {
      map.set(nums[i], 1);
    }
  }
  return max.k;
}
