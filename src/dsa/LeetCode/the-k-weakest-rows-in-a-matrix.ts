function kWeakestRows(mat: number[][], k: number): number[] {
  let arr: [number, number][] = [];
  for (let i = 0; i < mat.length; i++) {
    const soldires = mat[i].reduce((acc, curr) => acc + curr, 0);
    arr.push([i, soldires]);
  }
  arr.sort((a, b) => a[1] - b[1]);

  return arr.slice(0, k).map((e) => e[0]);
}
