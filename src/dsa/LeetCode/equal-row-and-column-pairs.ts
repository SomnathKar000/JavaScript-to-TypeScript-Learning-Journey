function findCommon(grid: number[][]): number {
  let count = 0,
    j = 0;
  let rowMap = new Map<string, number>();
  for (let i = 0; i < grid.length; i++) {
    const rowStr = JSON.stringify(grid[i]);
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }
  while (j < grid.length) {
    let column: number[] = [];
    for (let i = 0; i < grid.length; i++) {
      column.push(grid[i][j]);
    }
    let str = JSON.stringify(column);
    if (rowMap.has(str)) count += rowMap.get(str)!;
    j++;
  }
  return count;
}

console.log(
  findCommon([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
