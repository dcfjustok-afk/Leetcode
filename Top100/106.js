/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length||!postorder.length) return null;

    let root=new TreeNode(postorder[postorder.length-1])

    let index=inorder.indexOf(postorder[postorder.length-1])

    let leftIn=inorder.slice(0,index);
    let rightIn=inorder.slice(index+1);

    let leftPost=postorder.slice(0,leftIn.length)

    let rightPost=postorder.slice(leftIn.length,postorder.length-1)

    root.left=buildTree(leftIn,leftPost)
    root.right=buildTree(rightIn,rightPost)
    return root
};