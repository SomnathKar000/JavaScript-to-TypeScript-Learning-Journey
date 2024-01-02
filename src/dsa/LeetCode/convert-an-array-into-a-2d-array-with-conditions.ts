function findMatrix(nums: number[]): number[][] {
  let res: number[][] = [];

  for (const num of nums) {
    for (let i = 0; i <= res.length; i++) {
      if (res[i] === undefined) {
        res.push([num]);
      } else if (!res[i].includes(num)) {
        res[i].push(num);
      }
    }
  }

  return res;
}
