/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let result = [-1, -1]
    let findindex = (index) => {
        let left=index,right=index;
        while(left>=0&&nums[left]===target)
            left--;
        while(right<nums.length&&nums[right]===target)
            right++
        result=[left+1,right-1]
        return 
    }
    let func = (left, right) => {
        if (left > right)
            return
        if (left === right) {
            if (nums[left] === target)
                result = [left, left]
            return
        }
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            findindex(mid)
            return;
        } else if (nums[mid] > target) {
            // console.log(left + "  " + mid);

            func(left, mid)
        } else {
            // console.log("buyg");

            func(mid + 1, right)
        }
    }
    func(0, nums.length-1);
    return result
};