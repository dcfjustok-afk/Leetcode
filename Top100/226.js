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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root)
        return root;
    let arrayNode = []
    arrayNode.push(root)
    while (arrayNode.length > 0) {
        let curNode = arrayNode.pop()
        let temp = curNode.right;
        curNode.right = curNode.left;
        curNode.left = temp
        if (curNode.left) arrayNode.push(curNode.left)
        if (curNode.right) arrayNode.push(curNode.right)
    }
    return root;
};