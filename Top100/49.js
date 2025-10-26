/**
 * @param {string[]} strs
 * @return {string[][]}
 */

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
var groupAnagrams = function(strs) {
    let map={}
    for(let s of strs){
        const count=Array(26).fill(0)
        for(let char of s){
            count[char.charCodeAt()-'a'.charCodeAt()]+=1
        }
        if(map[count])
            map[count].push(s)
        else
            map[count]=[s]
    }
    return Object.values(map)
};

console.log(groupAnagrams(strs));
