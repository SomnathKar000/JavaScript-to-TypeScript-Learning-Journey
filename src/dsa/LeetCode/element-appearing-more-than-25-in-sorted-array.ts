function findSpecialInteger(arr: number[]): number {
  let occ = Math.trunc(arr.length / 4);
  for (let i = 0; i < arr.length - occ; i++) {
    if (arr[i] === arr[i + occ]) return arr[i];
  }
  return -1;
}
