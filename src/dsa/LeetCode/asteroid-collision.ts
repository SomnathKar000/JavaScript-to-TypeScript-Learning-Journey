function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = [];
  for (let k of asteroids) {
    while (stack.length !== 0 && stack[stack.length - 1] > 0 && k < 0) {
      let dis = stack[stack.length - 1] + k;
      if (dis === 0) {
        k = 0;
        stack.pop();
      } else if (dis < 0) {
        stack.pop();
      } else {
        k = 0;
      }
    }
    if (k) {
      stack.push(k);
    }
  }
  return stack;
}
