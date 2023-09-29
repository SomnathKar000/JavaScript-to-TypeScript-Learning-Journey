function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let list: boolean[] = [];
  let maxCandy = Math.max(...candies);
  for (const candy of candies)
    candy + extraCandies >= maxCandy ? list.push(true) : list.push(false);
  return list;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
