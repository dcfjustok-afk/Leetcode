/**
 * @param {number[]} nums
 * @return {number}
 */
let nums =[-2,-1,0,-3]
var findPeakElement = function(nums) {
    if(nums.length===1)
        return 0
    for(let i=0;i<nums.length;i++){
        // console.log(nums[i]);
        
        if(nums[i-1]===undefined){
            if(nums[i]>nums[i+1])
                return i;
        }else if (nums[i+1]===undefined){
            if(nums[i]>nums[i-1])
                return i;
        }{
            if(nums[i]>nums[i-1]&&nums[i]>nums[i+1])
                return i
        }
    }
};
console.log(findPeakElement(nums));
