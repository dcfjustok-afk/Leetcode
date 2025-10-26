s = "a good   example"
var reverseWords = function(s) {
    let result=""
    let l=0;
    while(s[l]===" "&&l<s.length)
        l++;
    for(;l<s.length;){
        let l_0=l;
        while(s[l_0]!==" "&&l_0<s.length)
            l_0++;
        // console.log(s.substring(l,l_0));
        
        result=s.substring(l,l_0)+result
        while(s[l_0]===" "&&l_0<s.length)
            l_0++;
        if(l_0>=s.length)
            return result
        l=l_0
        result=" "+result
    }
    return result
};
// reverseWords(s)
console.log(reverseWords(s));
