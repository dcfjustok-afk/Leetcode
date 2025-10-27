/**
 * @param {string[]} tokens
 * @return {number}
 */
tokens = ["4","13","5","/","+"]
var evalRPN = function (tokens) {
    let stack = [];
    let result = 0;
    for (token of tokens) {
        if (token === '-') {
            let temp1 = stack.pop();
            let temp2 = stack.pop();
            // console.log(temp1+" "+temp2);
            let tempResult=Math.trunc(temp2 - temp1)
            stack.push(tempResult)
            // result+=tempResult
        } else if (token === '+') {
            let temp1 = stack.pop();
            let temp2 = stack.pop();
            // console.log(temp1+" "+temp2);
            let tempResult=Math.trunc(temp1 + temp2)
            stack.push(tempResult)
            // result+=tempResult
        } else if (token === '*') {
            let temp1 = stack.pop();
            let temp2 = stack.pop();
            // console.log(temp1+" "+temp2);
            let tempResult=Math.trunc(temp1 * temp2)
            stack.push(tempResult)
            // result+=tempResult
        } else if (token === '/') {
            let temp1 = stack.pop();
            let temp2 = stack.pop();
            // console.log(temp1+" "+temp2);
            let tempResult=Math.trunc(temp2 / temp1)
            stack.push(tempResult)
            // result+=tempResult
        } else {
            stack.push(Number.parseInt(token))
        }
        // console.log(result);
        
    }
    return stack.pop();
};
console.log(evalRPN(tokens));
