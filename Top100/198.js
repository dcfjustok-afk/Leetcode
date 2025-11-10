/**
 * @param {number[]} nums
 * @return {number}
 */
let nums=[2,1,1,2]
var rob = function (nums) {
    let dp = [0,0,nums[0]]
    for (let i = 1; i < nums.length; i++) {
            dp[0]=dp[1];
            dp[1]=dp[2];
            dp[2]=Math.max(dp[0]+nums[i],dp[1])
            // console.log(dp);
            
    }
    return dp[2]
};
console.log(rob(nums));
