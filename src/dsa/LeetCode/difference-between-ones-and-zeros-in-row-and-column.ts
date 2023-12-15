function onesMinusZeros(grid: number[][]): number[][] {
  let rowArr: [number, number][] = [];
  let colArr: [number, number][] = [];

  for (let i = 0; i < grid.length; i++) {
    rowArr.push(countRow(grid[i]));
  }
  for (let i = 0; i < grid[0].length; i++) {
    colArr.push(countCol(i, grid));
  }
  let res: number[][] = new Array(grid.length)
    .fill([])
    .map(() => new Array(grid[0].length).fill(0));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const [zerosRow, onesRow] = rowArr[i];
      const [zerosCol, onesCol] = colArr[j];
      res[i][j] = onesRow + onesCol - zerosCol - zerosRow;
    }
  }

  return res;
}

function countRow(arr: number[]): [number, number] {
  let one = 0,
    zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) one++;
    else zero++;
  }
  return [zero, one];
}

function countCol(index: number, grid: number[][]): [number, number] {
  let zero = 0,
    one = 0;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][index] === 1) one++;
    else zero++;
  }
  return [zero, one];
}
