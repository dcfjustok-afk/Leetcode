/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let more = 1;
    let index = digits.length - 1;
    while (more !== 0 && index >= 0) {
        if (digits[index] + 1 >= 10) {
            digits[index] = 0
            index--;
        } else{
            more = 0
            digits[index]++
            break;
        }
    }
    if (more === 0)
        return digits
    return [1,...digits]
};