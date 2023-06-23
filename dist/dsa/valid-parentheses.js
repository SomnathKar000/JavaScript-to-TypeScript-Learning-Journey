"use strict";
let s = "()[]{}";
function isValid(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    let stack = [];
    let map = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === "{" || char === "[" || char === "(") {
            stack.push(char);
        }
        else {
            let pre = stack.pop();
            if (pre === undefined || char != map[pre]) {
                return false;
            }
        }
    }
    console.log(stack);
    return stack.length === 0;
}
console.log(isValid(s));
//# sourceMappingURL=valid-parentheses.js.map