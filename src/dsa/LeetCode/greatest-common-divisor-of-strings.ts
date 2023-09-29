const findGCDSNum = (a: number, b: number): number =>
  !b ? a : findGCDSNum(b, a % b);

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";
  let len = findGCDSNum(str1.length, str2.length);
  return str1.slice(0, len);
}
