/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let pre=0 , max=nums[0];
    for(num of nums){
        pre=Math.max(num,num+pre)
        max=Math.max(pre,max)
        // console.log(pre+"   "+max);
        
    }
    return max
};
console.log(maxSubArray(nums));
