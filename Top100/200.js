
let grid = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
var numIslands = function (grid) {
    let isGetHere = []
    for (let i = 0; i < grid.length; i++) {
        isGetHere.push(Array(grid[0].length).fill(false));
    }
    let count = 0
    let dfs = (i, j) => {
        if (i + 1 < grid.length) {
            if (grid[i + 1][j] === '1' && !isGetHere[i + 1][j]) {
                isGetHere[i + 1][j] = true;
                dfs(i + 1, j)
            }
        }
        if (i - 1 >= 0) {
            if (grid[i - 1][j] === '1' && !isGetHere[i - 1][j]) {
                isGetHere[i - 1][j] = true;
                dfs(i - 1, j)
            }
        }
        if (j + 1 < grid[0].length) {
            if (grid[i][j + 1] === '1' && !isGetHere[i][j + 1]) {
                isGetHere[i][j + 1] = true;
                dfs(i, j + 1)
            }
        }
        if (j - 1 >= 0) {
            if (grid[i][j - 1] === '1' && !isGetHere[i][j - 1]) {
                isGetHere[i][j - 1] = true;
                dfs(i, j - 1)
            }
        }

    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '0')
                continue
            else {
                if (isGetHere[i][j] === true)
                    continue;
                else {
                    isGetHere[i][j] = true
                    count++
                    dfs(i, j);
                }
            }
        }
    }
    return count
};

console.log(numIslands(grid));
