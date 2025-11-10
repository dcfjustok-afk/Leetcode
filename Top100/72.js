/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let word1 = "intention", word2 = "execution"
var minDistance = function (word1, word2) {
    let dp = [[]]
    for (let i = 0; i <= word1.length; i++) {
        dp[0].push(i)
    }
    for (let j = 1; j <= word2.length; j++) {
        dp.push([])
        dp[j].push(j)
    }
    console.log(dp);
    
    for (let i = 1; i <= word2.length; i++) {
        for (let j = 1; j <= word1.length; j++) {
            if (word2[i-1] === word1[j-1]) {
                dp[i].push(Math.min(dp[i - 1][j - 1], dp[i - 1][j] + 1, dp[i][j - 1]+1))
            } else {
                dp[i].push(Math.min(dp[i - 1][j - 1]+1, dp[i - 1][j] + 1, dp[i][j - 1]+1))
            }
        }
    }
    // console.log(dp);
    
    return dp.pop().pop()
};
console.log(minDistance(word1,word2));
