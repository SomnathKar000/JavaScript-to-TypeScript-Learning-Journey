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


function decodeString2(s: string): string {
    let stack = [];
    let currentNum = 0;
    let currentStr = "";

    for (let char of s) {
        if (char === "[") {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = "";
            currentNum = 0;
        } else if (char === "]") {
            let num = stack.pop() as number;
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else if (!isNaN(Number(char))) {
            currentNum = currentNum * 10 + Number(char);
        } else {
            currentStr += char;
        }
    }

    return currentStr;
};