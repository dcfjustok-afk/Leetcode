/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coins = [1, 2, 5], amount = 11
var coinChange = function (coins, amount) {
    const memo = Array(amount + 1).fill(-1); // 初始化为-1表示无解
    memo[0] = 0; // 金额为0时，硬币数为0

    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if (i - coin >= 0 && memo[i - coin] !== -1) {
                min = Math.min(min, memo[i - coin] + 1);
            }
        }
        memo[i] = min === Infinity ? -1 : min;
    }

    return memo[amount];
};
console.log(coinChange(coins,amount));
