/**
 * @param {string} s
 * @return {number}
 */

s="bbbbb"
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 || s.length === 1)
        return s.length;
    let array= Array(128).fill(-1)  // 存储的是 已存在字符的位置
    array[s.charCodeAt(0)]=0;
    let left=0 , right=1;
    let count =1;
    while(right<s.length){
        // console.log(left+" "+ right);
        
        if(array[s.charCodeAt(right)]>=left){//窗口内存在该字符
            left=array[s.charCodeAt(right)]+1;
        }else{ // 窗口内不存在该字符
            count= (right-left+1) >count ? right-left+1 : count
        }
        array[s.charCodeAt(right)]=right
        right++;
        // console.log(left+" "+ right);
        // console.log(count);
        
    }
    return count;
}
console.log(lengthOfLongestSubstring(s));
