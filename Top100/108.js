/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length===0)
        return null
    let index=Math.floor(nums.length/2);
    let root=new TreeNode(nums[index])
    root.left=sortedArrayToBST(nums.slice(0,index))
    root.right=sortedArrayToBST(nums.slice(index+1))
    return root
};