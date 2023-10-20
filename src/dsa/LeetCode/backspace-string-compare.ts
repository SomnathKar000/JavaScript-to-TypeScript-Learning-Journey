function backspaceCompare(s: string, t: string): boolean {
  let sArr: string[] = [];
  let tArr: string[] = [];
  for (const str of s) str === "#" ? sArr.pop() : sArr.push(str);
  for (const str of t) str === "#" ? tArr.pop() : tArr.push(str);
  return sArr.join("") === tArr.join("");
}
