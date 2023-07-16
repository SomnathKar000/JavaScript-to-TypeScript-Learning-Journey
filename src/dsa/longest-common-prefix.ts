function longestCommonPrefix(strs: string[]): string {
  let str: string[] = [];

  for (let j = 0; j < strs[0].length; j++) {
    let temp = strs[0][j];

    for (let i = 0; i < strs.length; i++) {
      if (temp === strs[i][j]) {
        continue;
      } else {
        return str.join("");
      }
    }
    str.push(temp);
  }
  return str.join("");
}
