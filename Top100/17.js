/**
 * @param {string} digits
 * @return {string[]}
 */
let digits = "432"
var letterCombinations = function (digits) {
    if (!digits)
        return []
    let result = [];
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    // console.log(map[digits[0]]);
    
    for (let i = 0; i < map[digits[0]].length; i++) {
        result.push(map[digits[0]][i])
    }


    console.log(result);

    for (let i = 1; i < digits.length; i++) {
        let curresult = [];
        while (result.length > 0) {
            let cur_char = result.pop()
            for (let j = 0; j < map[digits[i]].length; j++) {
                // console.log(cur_char+map[digits[i]][j]);
                
                curresult.push(cur_char+map[digits[i]][j])
            }
        }
        result = curresult
    }
    return result
};
console.log(letterCombinations(digits));
