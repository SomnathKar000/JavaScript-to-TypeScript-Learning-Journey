function findDifferentBinaryString(nums: string[]): string {
  // const set=new Set<string>(nums);
  // const binaryStrings=generateBinaryStrings(nums[0].length)
  // for(const str of binaryStrings)if(!set.has(str)) return str;
  const set = new Set<number>();
  for (const str of nums) set.add(parseInt(str, 2));
  const n = nums[0].length;
  for (let i = 0; i <= nums.length; i++)
    if (!set.has(i)) return i.toString(2).padStart(n, "0");
}

function generateBinaryStrings(n: number, str: string = ""): string[] {
  if (n === 0) return [str];
  const left = generateBinaryStrings(n - 1, str + "0");
  const right = generateBinaryStrings(n - 1, str + "1");
  return left.concat(right);
}
