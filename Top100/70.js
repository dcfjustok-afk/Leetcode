/**
 * @param {number} n
 * @return {number}
 */
let n=3
var climbStairs = function(n) {
    let q=0,w=0,r=1
    for(let i=1;i<=n;i++){
        q=w;
        w=r;
        r=q+w;
    }
    return r
};
console.log(climbStairs(n));
