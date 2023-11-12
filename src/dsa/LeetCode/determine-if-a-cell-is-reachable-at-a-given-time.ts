function isReachableAtTime(
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number
): boolean {
  const xdif = Math.abs(fx - sx);
  const ydif = Math.abs(fy - sy);
  if (xdif === 0 && ydif === 0 && t == 1) return false;
  const mn = Math.min(xdif, ydif) + Math.abs(ydif - xdif);
  return mn <= t;
}
