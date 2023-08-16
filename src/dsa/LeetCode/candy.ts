function candy(ratings: number[]): number {
  let n: number = ratings.length;
  let candyArr: number[] = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyArr[i] = candyArr[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candyArr[i] <= candyArr[i + 1]) {
      candyArr[i] = candyArr[i + 1] + 1;
    }
  }
  let count: number = 0;
  for (let i = 0; i < candyArr.length; i++) {
    count += candyArr[i];
  }
  return count;
}
