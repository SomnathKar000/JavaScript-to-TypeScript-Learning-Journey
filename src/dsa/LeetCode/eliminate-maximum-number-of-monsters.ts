function eliminateMaximum(dist: number[], speed: number[]): number {
  const n = dist.length;
  let monsters = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const arrival = Math.ceil(dist[i] / speed[i]);
    if (arrival < n) monsters[arrival]++;
  }

  let eleminated = 0;
  for (let i = 0; i < n; i++) {
    if (eleminated + monsters[i] > i) return i;
    eleminated += monsters[i];
  }

  return n;
}
