/**
 * @param {number[]} nums
 * @return {number[][]}
 */
nums = [0,0,0]
var threeSum = function(nums) {
    nums =nums.sort((a,b)=> a - b)
    // console.log(nums);
    let len=nums.length;
    if(nums[0]===0){
        if(nums[len-1]===0)
            return [[0,0,0]]
        return []
    }
    let result=[]
    for(let i=0;i<len-2;i++){
        if(nums[i]>0)
            return result;
        while(nums[i]===nums[i-1])
            i++;
        let l=i+1 , r=len-1;
        while(l<r){
            if(nums[i]+nums[l]+nums[r]>0)
                r--
            else if(nums[i]+nums[l]+nums[r]<0)
                l++
            else{
                result.push([nums[i],nums[l],nums[r]])
                // console.log(result);
                
                r--;
                while(nums[r]===nums[r+1])
                    r--;
                l++;
                while(nums[l]===nums[l-1])
                    l++;
            }
        }
    }
    return result
};
console.log(threeSum(nums));
