/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1,3], target = 0
var searchInsert = function (nums, target) {
    let location = null
    let func = (left, right) => {
        // console.log(left+"   "+right);
        
        if (right === left && nums[right] !== target) {
            if(nums[right]>target)
                location=right
            else
                location=right+1
            return 
        }
        let index = Math.floor((left + right) / 2)
        // console.log(index);
        
        if (nums[index] === target) {
            location = index;
            return
        } else if (nums[index] > target) {
            func(left, index )
        } else {
            func(index + 1, right)
        }
    }
    func(0,nums.length-1)
    return location
};

console.log(searchInsert(nums,target));
