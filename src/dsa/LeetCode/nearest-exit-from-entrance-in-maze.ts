function nearestExit(maze: string[][], entrance: number[]): number {
  let steps = 0;
  const directions: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let m = maze.length;
  let n = maze[0].length;

  let queue: number[][] = [];
  queue.push(entrance);

  maze[entrance[0]][entrance[1]] = "+";

  while (queue.length !== 0) {
    let N = queue.length;
    while (N--) {
      let pair = queue.shift()!;
      let i = pair[0];
      let j = pair[1];
      if (
        String(pair) !== String(entrance) &&
        (i === 0 || j === 0 || i === m - 1 || j === n - 1)
      )
        return steps;
      // ELplore neighbors
      for (const [a, b] of directions) {
        let new_i = i + a;
        let new_j = j + b;
        if (
          new_i >= 0 &&
          new_i < m &&
          new_j >= 0 &&
          new_j < n &&
          maze[new_i][new_j] !== "+"
        ) {
          queue.push([new_i, new_j]);
          maze[new_i][new_j] = "+";
        }
      }
    }
    steps++;
  }

  return -1;
}
