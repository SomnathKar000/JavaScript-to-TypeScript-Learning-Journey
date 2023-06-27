let piles: number[] = [30, 11, 23, 4, 20];
let h: number = 5;

const eatingSpeed = (array: number[], speed: number): number => {
  let hours = 0;
  for (let i = 0; i < array.length; i++) {
    hours += Math.ceil(array[i] / speed);
  }
  return hours;
};

function minEatingSpeed(piles: number[], h: number): number {
  let left: number = 1;
  let right: number = Math.max(...piles);

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);
    let hours: number = eatingSpeed(piles, mid);

    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(minEatingSpeed(piles, h));
