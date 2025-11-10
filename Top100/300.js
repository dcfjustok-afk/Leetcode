/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [0]
var lengthOfLIS = function(nums) {
    let dp=[]
    dp[0]=1;
    let max=1
    for(let i=1;i<nums.length;i++){
        dp[i]=1;
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }
        max=Math.max(max,dp[i])
    }
    // console.log(dp);
    return max
};
console.log(lengthOfLIS(nums));

