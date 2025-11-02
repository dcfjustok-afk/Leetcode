/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let nums = [0, 1]
var permute = function (nums) {
    let result = []
    let used=new Set()
    let backtrack = (path) => {
        if (path.length === nums.length) {
            result.push(path)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(nums[i]))
                continue;
            used.add(nums[i])
            backtrack([...path, nums[i]])
            used.delete(nums[i])
        }
    }

    backtrack([])

    return result
};
console.log(permute(nums));
