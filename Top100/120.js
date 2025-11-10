/**
 * @param {number[][]} triangle
 * @return {number}
 */
let triangle = [[-10]]
var minimumTotal = function (triangle) {
    let minPath = [];
    minPath.push(triangle[0])
    for (let i = 1; i < triangle.length; i++) {
        minPath[i] = []
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                minPath[i][j]=minPath[i-1][j]+triangle[i][j];
            } else if (j === triangle[i].length - 1) {
                minPath[i][j]=minPath[i-1][j-1]+triangle[i][j];
            } else {
                minPath[i][j] = Math.min(minPath[i-1][j-1],minPath[i-1][j])+triangle[i][j]
            }
        }
    }
    // console.log(minPath[minPath.length-1]);
    
    let min=Infinity
    for(let i=0;i<minPath[triangle.length-1].length;i++){
        min=Math.min(min,minPath[triangle.length-1][i])
    }
    return min;
};
console.log(minimumTotal(triangle));
