/**
 * @param {string} s
 * @return {string}
 */
let s = "cbbd"
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, maxLen = 1;

    // 中心扩展函数
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // 退出循环时 [left+1, right-1] 是回文区间
        let len = right - left - 1;
        if (len > maxLen) {
            maxLen = len;
            start = left + 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // 奇数长度中心
        expand(i, i + 1); // 偶数长度中心
    }

    return s.substring(start, start + maxLen);
};

console.log(longestPalindrome(s));
