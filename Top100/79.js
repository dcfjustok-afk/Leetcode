/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length
    let result = false
    let track = Array.from({ length: board.length }, () => Array(board[0].length).fill(false))

    function dfs(x, y, index) {
        if (result)
            return
        // 越界 / 已访问 / 字母不匹配
        if (
            x < 0 || x >= m ||
            y < 0 || y >= n ||
            track[x][y] ||
            board[x][y] !== word[index]
        ) return false

        // 匹配完整单词
        if (index === word.length - 1) { result = true; return }

        // 标记已访问
        track[x][y] = true

        // 四个方向搜索

        dfs(x + 1, y, index + 1) ||
            dfs(x - 1, y, index + 1) ||
            dfs(x, y + 1, index + 1) ||
            dfs(x, y - 1, index + 1)

        // 回溯（撤销访问）
        track[x][y] = false

    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(i, j, 0)
        }
    }
    return result
};