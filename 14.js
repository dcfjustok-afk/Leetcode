/**
 * @param {string[]} strs
 * @return {string}
 */
let strs = ["aaa","aa","aaa"]


var longestCommonPrefix = function(strs) {
    let len=strs.length;
    if(len===0)
        return ""
    if(len===1)
        return strs[0]
    let result="";
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<len;j++){
            if(strs[j].length===i)
                    return result;
            if(strs[j][i]===strs[0][i]){
                continue
            }
            return result;
        }
        result+=strs[0][i];
    }
    return result
};
console.log(longestCommonPrefix(strs));