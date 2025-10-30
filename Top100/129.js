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
var sumNumbers = function(root) {
    let result=0;
    function dfs(root,sum){
        if(!root.left&&!root.right)
            result+=sum+root.val;
        if(root.left)
            dfs(root.left,(sum+root.val)*10)
        if(root.right)
            dfs(root.right,(sum+root.val)*10)
    }
    dfs(root,0)
    return result;
};