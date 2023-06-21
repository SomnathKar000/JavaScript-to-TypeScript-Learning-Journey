"use strict";
const calculatetax = (income, taxYear = 2022) => {
    if (taxYear < 2022) {
        return income * 1.3;
    }
    return income * 1.5;
};
console.log(calculatetax(45000, 2022));
//# sourceMappingURL=function.js.map