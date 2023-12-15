function combinationSum3(k: number, n: number): number[][] {
  if (n < k) return [];

  let result: number[][] = [];

  function generate(start: number, array: number[], sum: number) {
    if (sum > n || array.length > k) return;
    else if (sum === n && array.length === k) {
      result.push([...array]);
      return;
    } else {
      for (let i = start; i < 10; i++) {
        array.push(i);
        generate(i + 1, array, sum + i);
        array.pop();
      }
    }
  }
  generate(1, [], 0);

  return result;
}
