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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return null;
    let resultNode = []
    resultNode.push(root)
    let newroot = new TreeNode();
    let Node = newroot;
    while (resultNode.length > 0) {
        let curNode = resultNode.pop()
        Node.right = new TreeNode(curNode.val, null, null)
        Node = Node.right
        if (curNode.right) resultNode.push(curNode.right)
        if (curNode.left) resultNode.push(curNode.left)
    }
    root=newroot.right
    return root
};