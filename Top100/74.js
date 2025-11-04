/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
var searchMatrix = function (matrix, target) {
    let flag = false;
    let func = (left, right, nums) => {
        if (left === right) {
            if (nums[left] === target) {
                flag = true;

            }
            return
        }
        let index = Math.floor((left + right) / 2)
        // console.log(nums[left] + "  " + nums[right]);
        // console.log(nums[index])

        if (nums[index] === target) {
            flag = true;
            return;
        } else if (nums[index] > target) {
            console.log(left + "  " + index);

            func(left, index, nums)
        } else {
            // console.log("buyg");

            func(index + 1, right,nums)
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        // console.log(matrix[i][matrix[0].length - 1]+"    ");

        if (target <=matrix[i][matrix[0].length - 1]) {
            // console.log("niuhao");
            func(0, matrix[0].length - 1, matrix[i]);
            // console.log("niuhao");

            break;
        }
    }
    return flag
};
console.log(searchMatrix(matrix, target));
