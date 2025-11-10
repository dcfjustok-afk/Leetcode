/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let obstacleGrid = [[0,1],[0,0]]
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp=Array(obstacleGrid[0].length).fill(0);
    dp[0]=obstacleGrid[0][0]===1?0:1
    for(let i=1;i<obstacleGrid[0].length;i++){
        dp[i]=dp[i-1]===0? 0 : obstacleGrid[0][i]===0 ? 1:0
    }
    // console.log(dp);
    
    for(let i=1;i<obstacleGrid.length;i++){
        dp[0]=obstacleGrid[i][0]===1 ? 0 : dp[0]
        for(let j=1;j<obstacleGrid[0].length;j++){
            dp[j]= obstacleGrid[i][j]===1 ?0 : dp[j-1] +dp[j]
        }
        // console.log(dp);
        
    } 
    return dp[dp.length-1]
};
console.log(uniquePathsWithObstacles(obstacleGrid));
