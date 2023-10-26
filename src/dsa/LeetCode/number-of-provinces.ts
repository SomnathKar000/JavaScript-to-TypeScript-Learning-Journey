function findCircleNum(isConnected: number[][]): number {
  let visited = new Set();
  let count = 0;
  function dfs(row: number) {
    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[row][i] && !visited.has(i)) {
        visited.add(i);
        dfs(i);
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
}
