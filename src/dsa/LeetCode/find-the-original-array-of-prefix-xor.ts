function findArray(pref: number[]): number[] {
  let arr = [pref[0]];
  for (let i = 1; i < pref.length; i++) arr.push(pref[i] ^ pref[i - 1]);
  return arr;
}
