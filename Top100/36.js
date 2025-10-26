/**
 * @param {character[][]} board
 * @return {boolean}
 */
board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = Array(9).fill(0);
    let col = Array(9).fill(0);
    for (let j = 0; j < 9; j++) {
      // 检查行
      if (board[i][j] !== ".") {
        const num = board[i][j] - 1;
        if (row[num]) return false;
        row[num] = 1;
      }
      // 检查列
      if (board[j][i] !== ".") {
        const num = board[j][i] - 1;
        if (col[num]) return false;
        col[num] = 1;
      }
    }
  }

  // 检查 3x3 小方格
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      let box = Array(9).fill(0);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const cur = board[boxRow * 3 + i][boxCol * 3 + j];
          if (cur !== ".") {
            const num = cur - 1;
            if (box[num]) return false;
            box[num] = 1;
          }
        }
      }
    }
  }

  return true;
};

console.log(isValidSudoku(board)); // ✅ true
