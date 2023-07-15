function canCompleteCircuit(gas: number[], cost: number[]): number {
  let count: number = 0;
  let start: number = 0;
  let tank: number = 0;
  for (let i = 0; i < gas.length; i++) {
    let temp = gas[i] - cost[i];
    count += temp;
    tank += temp;
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return count >= 0 ? start - 1 : -1;
}
