nums = [54, 546, 548, 60];

const maxNumber1 = (nums: number[]): number => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let num1 = nums[i];
      let num2 = nums[j];
      let compare1 = Number(String(num1) + String(num2));
      let compare2 = Number(String(num2) + String(num1));
      if (compare2 > compare1) {
        nums[i] = num2;
        nums[j] = num1;
      }
    }
  }
  return Number(nums.join(""));
};

const maxNumber2 = (nums: number[]): number => {
  nums.sort((a, b) => {
    let compare1 = Number(String(a) + String(b));
    let compare2 = Number(String(b) + String(a));
    return compare2 - compare1;
  });
  return Number(nums.join(""));
};

console.log(maxNumber1(nums));
