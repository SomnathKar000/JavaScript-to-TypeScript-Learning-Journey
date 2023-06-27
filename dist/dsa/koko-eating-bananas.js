"use strict";
let piles = [30, 11, 23, 4, 20];
let h = 5;
const eatingSpeed = (array, speed) => {
    let hours = 0;
    for (let i = 0; i < array.length; i++) {
        hours += Math.ceil(array[i] / speed);
    }
    return hours;
};
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let hours = eatingSpeed(piles, mid);
        if (hours > h) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}
console.log(minEatingSpeed(piles, h));
//# sourceMappingURL=koko-eating-bananas.js.map