function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function generate(start: number, array: number[], sum: number) {
    if (sum === target) {
      result.push([...array]);
      return;
    } else if (sum < target) {
      for (let i = start; i < candidates.length; i++) {
        array.push(candidates[i]);
        generate(i, array, candidates[i] + sum);
        array.pop();
      }
    }
  }

  generate(0, [], 0);

  return result;
}
