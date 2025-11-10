/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
var isInterleave = function(s1, s2, s3) {
    let p1=0 , p2=0;
    for(ch of s3){
        console.log("ch: "+ch+"  p1:"+p1+"  P2:"+p2);
        
        if(p1<s1.length&&ch===s1[p1]){
            p1++
        }else if (p2<s2.length&&ch===s2[p2]){
            p2++;
        }else{
            return false
        }
    }
    return true
};
console.log(isInterleave(s1,s2,s3));
