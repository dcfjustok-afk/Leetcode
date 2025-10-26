/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [100,4,200,1,3,2]
var longestConsecutive = function(nums) {
    if(nums.length===0)
        return 0;
    let hashmap={}
    for(num of nums ){
        hashmap[num]=1
    }
    // console.log(hashmap);
    
    let Maxresult=1
    for(let index in hashmap){
        // console.log(index);
        
        if(hashmap[index-1])
            continue;
        let result=1 ,num=Number.parseInt(index)
        // console.log(typeof num);
        
        while(hashmap[num+1]){
            num++;
            result++;
        }
        // console.log(result);
        
        Maxresult = Maxresult> result? Maxresult: result
    }
    return Maxresult
};
console.log(longestConsecutive(nums));
