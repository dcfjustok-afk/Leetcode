/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
s = "bbbaaaba", t = "aaabbbba"
var isIsomorphic = function(s, t) {
    let s_hashmap=Array(128).fill(-1)
    let t_hashmap=Array(128).fill(-1)
    for(let i=0;i<s.length;i++){
        if(s_hashmap[s[i].charCodeAt()]===-1&&t_hashmap[t[i].charCodeAt()]===-1){
            s_hashmap[s[i].charCodeAt()]=i
            t_hashmap[t[i].charCodeAt()]=i
            continue;
        }else if(s_hashmap[s[i].charCodeAt()]!==-1&&t_hashmap[t[i].charCodeAt()]!==-1){
            if(s_hashmap[s[i].charCodeAt()]===t_hashmap[t[i].charCodeAt()])
                    continue;
            else
                return false
        }else
            return false
    }
    return true;
};
console.log(isIsomorphic(s,t));
