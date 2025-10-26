/**
 * @param {number} n
 * @return {boolean}
 */

n = 19
var isHappy = function(n) {
    let map={}
    map[n]=1;
    let result
    while(n!==1){
        result=0;
        while(n!==0){
            result+=(n%10)*(n%10);
            n=Math.floor(n/10);
        }
        if(map[result])
            return false;
        map[result]=1;
        n=result
        // console.log(map);
        
    }
    return true
};
console.log(isHappy(n));
