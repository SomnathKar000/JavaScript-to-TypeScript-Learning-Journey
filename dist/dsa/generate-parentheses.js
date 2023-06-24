"use strict";
const n = 3;
function generateParenthesis(n) {
    const results = [];
    function backtrack(s, open, close) {
        if (s.length === 2 * n) {
            results.push(s);
            return;
        }
        if (open < n) {
            backtrack(s + "(", open + 1, close);
        }
        if (close < open) {
            backtrack(s + ")", open, close + 1);
        }
    }
    backtrack("", 0, 0);
    return results;
}
console.log(generateParenthesis(n));
//# sourceMappingURL=generate-parentheses.js.map