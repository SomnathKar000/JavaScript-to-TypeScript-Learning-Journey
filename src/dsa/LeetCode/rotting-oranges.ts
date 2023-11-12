function orangesRotting(grid: number[][]): number {
  const directions: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let minutes = 0;

  let row = grid.length;
  let col = grid[0].length;
  let queue: number[][] = [];
  let fresh = 0;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === 1) fresh++;
      else if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  while (queue.length !== 0 && fresh > 0) {
    let n = queue.length;
    while (n--) {
      const [R, C] = queue.shift()!;
      for (const [a, b] of directions) {
        const new_r = R + a;
        const new_c = C + b;
        if (
          new_r < row &&
          new_r >= 0 &&
          new_c < col &&
          new_c >= 0 &&
          grid[new_r][new_c] === 1
        ) {
          queue.push([new_r, new_c]);
          grid[new_r][new_c] = 2;
          fresh--;
        }
      }
    }
    minutes++;
  }

  return fresh == 0 ? minutes : -1;
}
