"use strict";
var _a;
const getCustomer = (id) => {
    return id === 0 ? null : { birthDay: new Date() };
};
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=optional_chaining.js.map