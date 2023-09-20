const BubbleSort = (arr: number[]): number[] => {
  let flag = false;
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
};

console.log(BubbleSort([2, 8, 1, 7, 6, 5, 3]));
