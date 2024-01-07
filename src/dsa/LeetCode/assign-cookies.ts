function findContentChildren(g: number[], s: number[]): number {
  let res = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gi = 0,
    si = 0;
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      res++;
      gi++;
    }
    si++;
  }
  return res;
}
