/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root)
        return false
    function dfs(root, sum) {
        sum += root.val;
        if (!root.left && !root.right) {
            if (sum === targetSum)
                return true;
            else
                return false
        }

        let flag1 = false, flag2 = false
        if (root.left)
            flag1 = dfs(root.left, sum)
        if (root.right)
            flag2 = dfs(root.right, sum)

        return flag1 || flag2;

    }
    return dfs(root, 0)
};