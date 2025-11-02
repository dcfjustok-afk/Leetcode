/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let n = 4, k = 3
var combine = function (n, k) {
    let result = []
    let backtrack=(start,path)=>{
        if(path.length===k){
            result.push(path)
            return 
        }
        for(let i=start+1;i<=n;i++){
            backtrack(i,[...path,i])
        }
    }
    backtrack(0,[])
    return result
};
console.log(combine(n, k));
