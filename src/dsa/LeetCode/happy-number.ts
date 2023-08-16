const modValue = (n: number): number => {
  let result: number = 0;
  while (n >= 1) {
    let tempNo = Math.floor(n % 10);
    result += Math.pow(tempNo, 2);
    n /= 10;
  }
  return result;
};

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;
  do {
    slow = modValue(slow);
    fast = modValue(modValue(fast));
  } while (slow !== fast);
  return slow === 1;
}
console.log(isHappy(19));
