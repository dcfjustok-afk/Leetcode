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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let num = null
    let result = true;
    let dfs = (root) => {
        if (root.left)
            dfs(root.left)
        if (num !== null) {
            if (root.val <=num) {
                result = false
                return;
            } else {
                num = root.val
                if (root.right)
                    dfs(root.right)
            }
        } else {
            num = root.val
            if (root.right)
                dfs(root.right)
        }
    }
    dfs(root)
    return result
};