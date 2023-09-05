function decodeString(s: string): string {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let str = "";
      let pop = stack.pop();
      while (pop !== "[") {
        str = pop + str;
        pop = stack.pop();
      }
      let charNum = "";
      while (!isNaN(Number(stack[stack.length - 1]))) {
        charNum = stack.pop() + charNum;
      }
      let num = Number(charNum);
      while (num > 0) {
        stack.push(str);
        num--;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}
