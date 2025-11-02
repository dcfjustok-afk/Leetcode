/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let candidates = [2, 3, 6, 7], target = 7
var combinationSum = function (candidates, target) {
    let result = []
    let backtrack = (sum, path, index) => {
        if (sum > target)
            return
        if (sum === target) {
            result.push(path)
        }
        for (let i = index; i < candidates.length; i++){
            backtrack(sum+candidates[i],[...path,candidates[i]],i)
        }
    }
    backtrack(0, [], 0)
    return result
};

console.log(combinationSum(candidates, target));
