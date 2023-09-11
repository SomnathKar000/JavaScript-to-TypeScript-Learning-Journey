type Fn2 = (...args: any[]) => any;
function once(fn: Fn2): Fn2 {
  let flag = false;
  return function (...args) {
    if (!flag) {
      flag = true;
      return fn(...args) as number;
    }
    return undefined;
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
