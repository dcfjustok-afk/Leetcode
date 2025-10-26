s = "axc", t = "ahbgdc"
var isSubsequence = function(s, t) {
    // if(s.length===0||t.length===0)
    //     return false;
    let l1=0 , l2=0;
    // if(s.length>t.length){
    //     short=t
    //     long=s
    // }
    // else{
    //     short=s
    //     long=t
    // }
    while(l1<s.length&&l2<t.length){
        if(s[l1]===t[l2]){
            l1++;
            l2++;
            continue
        }
        l2++;
    }
    if(l2>=t.length&&l1<s.length)
        return false
    return true
};
console.log(isSubsequence(s,t));
