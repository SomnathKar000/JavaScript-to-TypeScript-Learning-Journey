"use strict";
const tokens = [
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
];
function evalRPN(tokens) {
    let i = 2;
    while (tokens.length > 1) {
        if (tokens[i] === "+") {
            let n = Number(tokens[i - 2]) + Number(tokens[i - 1]);
            tokens.splice(i - 2, 3, String(n));
            i -= 2;
        }
        else if (tokens[i] === "-") {
            let n = Number(tokens[i - 2]) - Number(tokens[i - 1]);
            tokens.splice(i - 2, 3, String(n));
            i -= 2;
        }
        else if (tokens[i] === "/") {
            let n = Number(tokens[i - 2]) / Number(tokens[i - 1]);
            tokens.splice(i - 2, 3, String(Math.trunc(n)));
            i -= 2;
        }
        else if (tokens[i] === "*") {
            let n = Number(tokens[i - 2]) * Number(tokens[i - 1]);
            tokens.splice(i - 2, 3, String(Math.trunc(n)));
            i -= 2;
        }
        else {
            i++;
        }
    }
    return Math.round(Number(tokens[0]));
}
console.log(evalRPN(tokens));
//# sourceMappingURL=evaluate-reverse-polish-notation.js.map