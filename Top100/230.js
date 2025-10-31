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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count=0;
    let result;
    let dfs=(root)=>{
        if(root.left)
            dfs(root.left)
        count++;
        if(count===k){
            result=root.val
            return ;
        }else{
            if(root.right)
                dfs(root.right)
        }
    }
    dfs(root)
    return result
};