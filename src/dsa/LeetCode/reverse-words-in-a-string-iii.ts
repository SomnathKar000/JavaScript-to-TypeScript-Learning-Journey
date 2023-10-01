function reverseWords(s: string): string {
  let strArr: string = "";
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
    if (s[i] === " ") {
      strArr = str + strArr;
      str = "";
    }
  }
  if (str !== "") {
    strArr = str + " " + strArr;
  }
  return strArr.trim();
}
