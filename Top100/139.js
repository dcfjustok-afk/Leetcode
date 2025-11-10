/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

let s =
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
wordDict =
    ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
var wordBreak = function (s, wordDict) {
    let words = []
    for (let i = 0; i < wordDict.length; i++) {
        if (!words[wordDict[i].length])
            words[wordDict[i].length] = new Set()
        words[wordDict[i].length].add(wordDict[i])
    }
    // console.log(words);
    let memo = new Map();

    let dfs = (str) => {
        if (str.length === 0) return true;
        if (memo.has(str)) return memo.get(str);

        for (let i = 0; i < str.length; i++) {
            if (words[i + 1] && words[i + 1].has(str.substring(0, i + 1))) {
                if (dfs(str.substring(i + 1))) {
                    memo.set(str, true);
                    return true;
                }
            }
        }

        memo.set(str, false);
        return false;
    };
    let result = dfs(s)
    return result;
};
console.log(wordBreak(s, wordDict));
