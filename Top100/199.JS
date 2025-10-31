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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if(!root)
        return []
    let arrayNode = [root]
    let resultNode = []
    while (arrayNode.length > 0) {
        let newArray = [];
        let curNode = arrayNode[arrayNode.length-1];
        resultNode.push(curNode.val)
        for (let i = 0; i < arrayNode.length; i++) {
            if (arrayNode[i].left) newArray.push(arrayNode[i].left)
            if (arrayNode[i].right) newArray.push(arrayNode[i].right)
        }
        arrayNode=newArray;
    }
    return resultNode;
};