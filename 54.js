/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let maxrow = matrix.length;
    let maxcum = matrix[0].length
    let cum = 0, row = 0;
    let nums = Array(maxrow).fill(Array(maxcum).fill(0))
    nums[0][0] = 1
    let flag = 0;
    let result = "";
    while (true) {
        if (flag % 4 === 0) {
            if (nums[row][cum + 1] !== 0) // 说明转换方向后 依然 走不动 ，说明 全部遍历完了
                return result;
            while (cum + 1 < maxcum && nums[row][cum + 1] === 0) {
                cum++;
                result+=matrix[row][cum]
            }
            flag++;

        }
        if (flag % 4 === 1) {
            if (nums[row + 1][cum] !== 0) // 说明转换方向后 依然 走不动 ，说明 全部遍历完了
                return result;
            while (row + 1 < maxrow && nums[row + 1][cum] === 0) {
                row++;
                result+=matrix[row][cum]
            }
            flag++;
        }
        if (flag % 4 === 2) {
            if (nums[row][cum - 1] !== 0) // 说明转换方向后 依然 走不动 ，说明 全部遍历完了
                return result;
            while (cum - 1 >= 0 && nums[row][cum - 1] === 0) {
                cum--;
                result+=matrix[row][cum]
            }

            flag++;
        }
        if (flag % 4 === 3) {
            if (nums[row - 1][cum] !== 0) // 说明转换方向后 依然 走不动 ，说明 全部遍历完了
                return result;
            while (row - 1 >= 0 && nums[row - 1][cum] === 0) {
                row--;
                result+=matrix[row][cum]
            }
            flag++;
        }
    }
    return 
};