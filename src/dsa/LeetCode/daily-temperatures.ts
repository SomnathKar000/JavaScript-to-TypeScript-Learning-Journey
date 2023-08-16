const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
function dailyTemperatures(temperatures: number[]): number[] {
  let days: number[] = [];
  let count: number[] = [];
  let i: number = temperatures.length - 1;
  while (i >= 0) {
    if (temperatures[count[count.length - 1]] > temperatures[i]) {
      days.unshift(count[count.length - 1] - i);
      count.push(i);
      i--;
    } else if (count.length === 0) {
      count.push(i);
      days.unshift(0);
      i--;
    } else {
      count.pop();
    }
  }

  return days;
}

console.log(dailyTemperatures(temperatures));
