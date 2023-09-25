function findTheDifference(s: string, t: string): string {
  let map = new Map<string, number>();
  for (const str of t) map.set(str, (map.get(str) || 0) + 1);
  for (const str of s) {
    let occ = map.get(str);
    if (occ !== undefined && occ > 1) map.set(str, occ - 1);
    else if (occ === 1) map.delete(str);
  }
  return [...map.keys()][0];
}
