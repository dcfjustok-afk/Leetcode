/**
 * @param {number[]} nums
 * @return {string[]}
 */
nums = [0,1,2,4,5,7]
var summaryRanges = function (nums) {
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i+1]!=undefined&&nums[i+1]===nums[i]+1){
            let curi=i;
            while(nums[i+1]!=undefined&&nums[i+1]===nums[i]+1)
                i++;
            result.push(nums[curi]+"->"+nums[i])
            continue;
        }
        result.push(nums[i]+"")
    }
    return result;
};
console.log(summaryRanges(nums));
