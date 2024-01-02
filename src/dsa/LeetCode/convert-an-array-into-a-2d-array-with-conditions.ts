function findMatrix(nums: number[]): number[][] {
  let res: number[][] = [[]];
  let map = new Map<number, number>();
  for (const num of nums) {
    let occ = (map.get(num) || 0) + 1;
    map.set(num, occ);
  }

  for (let [num, occ] of map) {
    while (occ !== 0) {
      res[occ - 1].push(num);
      occ--;
    }
  }

  return res;
}
