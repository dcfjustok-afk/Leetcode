/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
nums = [2, 7, 11, 15], target = 9
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        // console.log(map[target - nums[i]]);
        
        if (map[target - nums[i]]!==undefined) {
            return [map[target - nums[i]], i]
        } else {
            map[nums[i]] = i;
        }
        // console.log(map);
    }
    // console.log(map);

};
twoSum(nums,target)