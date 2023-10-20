function getRow(rowIndex: number): number[] {
  let ans = 1;
  let res: number[] = [];
  res.push(ans);
  for (let i = 1; i <= rowIndex; i++) {
    let next = (ans * (rowIndex - i + 1)) / i;
    res.push(next);
    ans = next;
  }
  return res;
}
