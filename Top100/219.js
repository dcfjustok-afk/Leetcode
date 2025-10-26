/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
nums = [1,2,3,1,2,3], k = 2
var containsNearbyDuplicate = function(nums, k) {
    let hashmap={};
    for(let i=0;i<nums.length;i++){
        if(hashmap[nums[i]]!==undefined){
            if(i-hashmap[nums[i]]<=k)
                return true;
            hashmap[nums[i]]=i;
        }
        hashmap[nums[i]]=i;
    }
    return false;
};
console.log(containsNearbyDuplicate(nums,k));
