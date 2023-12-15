function numSpecial(mat: number[][]): number {
  let count = 0;
  function getColumnSum(colIndex: number) {
    return mat.reduce((acc, row) => acc + row[colIndex], 0);
  }
  for (const row of mat) {
    if (row.reduce((a, b) => a + b, 0) === 1) {
      let index = row.indexOf(1);
      count += getColumnSum(index) === 1 ? 1 : 0;
    }
  }

  return count;
}
