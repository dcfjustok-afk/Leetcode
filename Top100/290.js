/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
pattern =
"abba"
s =
"dog constructor constructor dog"
var wordPattern = function(pattern, s) {
    let chars=s.split(" ")
    // console.log(chars);
    let pTOs={}
    let sTOp={}
    if(chars.length!==pattern.length)
        return false
    let hashmap=Array(26).fill(" ")
    for(let i=0;i<pattern.length;i++){
        if(!pTOs[pattern[i]+"_"]&&!sTOp[chars[i]+"_"]){
            pTOs[pattern[i]+"_"]=chars[i]+"_"
            sTOp[chars[i]+"_"]=pattern[i]+"_"
        }else if(pTOs[pattern[i]+"_"]===chars[i]+"_"&&sTOp[chars[i]+"_"]===pattern[i]+"_"){
            continue
        }else{
            console.log(pTOs[pattern[i]]);
            console.log(sTOp[chars[i]]);
            
            
            return false
        }
        // console.log(pTOs);
        // console.log(sTOp);
        
        
    }
    return true;
};
console.log(wordPattern(pattern,s));
