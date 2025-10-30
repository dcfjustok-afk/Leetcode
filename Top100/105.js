/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
var buildTree = function(preorder, inorder) {
    if(!preorder.length||!inorder.length)
        return null;
    let root=new TreeNode(preorder[0]);

    let indexIn=inorder.indexOf(preorder[0])
    
    let inorder_left=inorder.slice(0,indexIn)
    let inorder_right=inorder.slice(indexIn+1)

    let preorder_left=preorder.slice(1,1+inorder_left.length)
    let preorder_right=preorder.slice(1+inorder_left.length)
    root.left=buildTree(preorder_left,inorder_left)
    root.right=buildTree(preorder_right,inorder_right)

    return root;
};