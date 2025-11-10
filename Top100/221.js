/**
 * @param {character[][]} matrix
 * @return {number}
 */
let  matrix = [["0","0"],["0","0"]]
var maximalSquare = function (matrix) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j]=Number.parseInt(matrix[i][j])
            if (j === 0 || i === 0) {
            }else{
                if(matrix[i][j]){
                    matrix[i][j]=Math.min(matrix[i-1][j-1],matrix[i-1][j],matrix[i][j-1])+1
                }
            }
            max=Math.max(max,matrix[i][j])
        }
    }
    // console.log(matrix);
    
    return max*max
};

console.log(maximalSquare(matrix));
