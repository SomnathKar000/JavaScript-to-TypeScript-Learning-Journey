function majorityElement(nums: number[]): number[] {
  let val1 = null,
    val2 = null,
    count1 = 0,
    count2 = 0;
  let res: number[] = [];
  for (const num of nums) {
    if (val1 === num) {
      count1++;
    } else if (val2 === num) {
      count2++;
    } else if (count1 === 0) {
      val1 = num;
      count1++;
    } else if (count2 === 0) {
      val2 = num;
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (const num of nums) {
    if (num === val1) count1++;
    else if (num === val2) count2++;
  }
  if (nums.length / 3 < count1) res.push(val1!);
  if (nums.length / 3 < count2) res.push(val2!);
  return res;
}
