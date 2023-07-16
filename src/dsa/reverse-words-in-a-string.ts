function reverseWords(s: string): string {
  let temp: string[] = [];
  let word: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word.push(s[i]);
    } else {
      if (word.length > 0) {
        temp.unshift(word.join(""));
      } else {
        continue;
      }
      word = [];
    }
  }
  if (word.length > 0) {
    temp.unshift(word.join(""));
  }
  return temp.join(" ");
}
