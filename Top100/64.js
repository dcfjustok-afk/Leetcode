/**
 * @param {number[][]} grid
 * @return {number}
 */

let grid = [[1,2,3],[4,5,6]]
var minPathSum = function(grid) {
    let dp=Array(grid[0].length).fill(0);
    dp[0]=grid[0][0]
    for(let i=1;i<grid[0].length;i++){
        dp[i]=dp[i-1]+grid[0][i]
    }
    // console.log(dp);
    
    for(let i=1;i<grid.length;i++){
        dp[0]=dp[0]+grid[i][0]
        for(let j=1;j<grid[0].length;j++){
            dp[j]=Math.min(dp[j-1],dp[j])+grid[i][j]
        }
        // console.log(dp);
        
    }
    return dp[dp.length-1];
};
console.log(minPathSum(grid));
