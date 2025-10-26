/**
 * @param {string} s
 * @return {boolean}
 */
s = "(]"
var isValid = function (s) {
    let newArray = []
    newArray.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '(' || s[i] === '[')
            newArray.push(s[i])
        else {
            if (s[i] === '}') {
                if (newArray[newArray.length - 1] === '{') {
                    newArray.pop();
                    continue
                }
                return false;
            } else if (s[i] === ')') {
                if (newArray[newArray.length - 1] === '(') {
                    newArray.pop();
                    continue
                }
                return false;
            } else {
                if (newArray[newArray.length - 1] === '[') {
                    newArray.pop();
                    continue
                }
                return false;
            }
        }
    }
    if(newArray.length===0)
        return true
    return false
};
console.log(isValid(s));
