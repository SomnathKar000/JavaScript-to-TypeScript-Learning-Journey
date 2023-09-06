function removeDuplicates(s: string, k: number): string {
  let stack: [string, number][] = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
      let val = stack[stack.length - 1][1];
      stack[stack.length - 1][1] = val + 1;
    } else {
      stack.push([s[i], 1]);
    }
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }
  return stack.reduce((acc, [char, count]) => acc + char.repeat(count), "");
}
