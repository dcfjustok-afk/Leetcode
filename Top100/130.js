/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
board =
    [["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]]
var solve = function (board) {
    let isGetHere = []
    for (let i = 0; i < board.length; i++) {
        isGetHere.push(Array(board[0].length).fill(false));
    }
    // console.log(isGetHere);

    let dfs = (i, j) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        if (board[i][j] !== 'O' || isGetHere[i][j]) return;
        isGetHere[i][j] = true;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[0].length; j++) {
            if (j === 0 || j === board[0].length - 1 || i === 0 || i === board.length - 1) {
                if (board[i][j] === 'O' && !isGetHere[i][j]) {
                    // console.log("nihao");

                    
                    dfs(i, j);
                }
            }
        }

    }


    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'O' && !isGetHere[i][j])
                board[i][j] = 'X';
        }

    };
    // console.log(isGetHere);

    return board
}

console.log(solve(board));
