function transpose(matrix: number[][]): number[][] {
  let result: number[][] = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      let val = matrix[r][c];
      if (result[c] === undefined) result[c] = [];
      result[c].push(val);
    }
  }
  return result;
}
