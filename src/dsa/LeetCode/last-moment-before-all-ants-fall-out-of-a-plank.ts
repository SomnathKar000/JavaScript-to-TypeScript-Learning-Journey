function getLastMoment(n: number, left: number[], right: number[]): number {
  return Math.max(...left, ...right.map((e) => n - e));
}
