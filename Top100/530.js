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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let pre = -100001;
    let ans = 100001;
    let dfs = (root) => {
        if (root.left)
            dfs(root.left)
        ans = Math.abs(root.val - pre) > ans ? ans : Math.abs(root.val - pre)
        pre=root.val
        if (root.right)
            dfs(root.right)
    }
    dfs(root)
    return ans;
};