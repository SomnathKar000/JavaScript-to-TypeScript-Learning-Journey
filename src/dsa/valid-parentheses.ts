let s: string = "()[]{}";

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack: string[] = [];
  let map: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i: number = 0; i < s.length; i++) {
    let char: string = s[i];
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      let pre = stack.pop();
      if (pre === undefined || char != map[pre]) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
}
console.log(isValid(s));
