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
var averageOfLevels = function(root) {
    if(!root)
        return []
    let arrayNode = [root]
    let result = []
    while (arrayNode.length > 0) {
        let newArray = [];
        let sum=0;
        for (let i = 0; i < arrayNode.length; i++) {
            sum+=arrayNode[i].val
            if (arrayNode[i].left) newArray.push(arrayNode[i].left)
            if (arrayNode[i].right) newArray.push(arrayNode[i].right)
        }
        result.push(sum/arrayNode.length)
        arrayNode=newArray;
    }
    return result;
};