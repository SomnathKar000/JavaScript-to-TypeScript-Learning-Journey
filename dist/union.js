"use strict";
const kgToLbs = (weight) => {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};
console.log(kgToLbs(28));
console.log(kgToLbs("32kg"));
//# sourceMappingURL=union.js.map