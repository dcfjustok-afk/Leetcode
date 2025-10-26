/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
s =
"ggii"
t =
"eekk"


var isAnagram = function(s, t) {
    if(s.length!==t.length)
        return false;
    let s_hashmap=Array(26).fill(0)
    let t_hashmap=Array(26).fill(0)
    for(let i=0;i<s.length;i++)
        s_hashmap[s[i].charCodeAt()-'a'.charCodeAt()]+=1;
    for(let i=0;i<t.length;i++)
        t_hashmap[t[i].charCodeAt()-'a'.charCodeAt()]+=1;
    console.log(s_hashmap);
    console.log(t_hashmap);
    
    
    for(let i=0;i<s_hashmap.length;i++)
        if(s_hashmap[i]!==t_hashmap[i])
            return false
    return true;
};
console.log(isAnagram(s,t));
