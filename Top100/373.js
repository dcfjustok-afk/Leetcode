/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
let nums1 = [1,2,4,5,6], nums2 = [3,5,7,9], k = 3
var kSmallestPairs = function(nums1, nums2, k) {
    let result=[]
    let i=0,j=0;
    let count=0
    while(count<k){
        result.push([nums1[i],nums2[j]])
        count++;
        if(nums1[i+1]!==undefined&&nums2[j+1]!==undefined){
            if(nums1[i+1]+nums2[j]<nums2[j+1]+nums1[i])
                i++;
            else
                j++;
        }else{
            if(nums1[i+1]===undefined)
                j++;
            else
                i++;
        }
        console.log(result);
        
    }
    return result;
};

console.log(kSmallestPairs(nums1,nums2,k));
