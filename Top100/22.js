/**
 * @param {number} n
 * @return {string[]}
 */
let n = 3
var generateParenthesis = function (n) {
    let result = []
    let backtrack = (x, y, str) => {
        // console.log(x + "   " + y);

        console.log(str);
        if (x === n && y === n) {
            console.log(str);

            result.push(str)
            return
        }
        if (y < x)
            backtrack(x, y + 1, str + ")")
        if (x + 1 <= n)
            backtrack(x + 1, y, str + "(")

    }
    backtrack(0, 0, "")
    return result;
};
console.log(generateParenthesis(n));
