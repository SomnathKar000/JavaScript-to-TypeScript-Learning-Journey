"use strict";
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
function dailyTemperatures(temperatures) {
    let days = [];
    let count = [];
    let i = temperatures.length - 1;
    while (i >= 0) {
        if (temperatures[count[count.length - 1]] > temperatures[i]) {
            days.unshift(count[count.length - 1] - i);
            count.push(i);
            i--;
        }
        else if (count.length === 0) {
            count.push(i);
            days.unshift(0);
            i--;
        }
        else {
            count.pop();
        }
    }
    return days;
}
console.log(dailyTemperatures(temperatures));
//# sourceMappingURL=daily-temperatures.js.map