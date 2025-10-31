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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root)
        return []
    let arrayNode = [root]
    let resultArray = []
    let flag = true;
    while (arrayNode.length > 0) {
        let newArray = [];
        let nums = []
        for (let i = 0; i < arrayNode.length; i++) {
            
            if (arrayNode[i].left) newArray.push(arrayNode[i].left)
            if (arrayNode[i].right) newArray.push(arrayNode[i].right)
        }
        if (flag) {
            for(let i=0;i<arrayNode.length;i++)
                nums.push(arrayNode[i].val)
        } else {
            for(let i=arrayNode.length-1;i>=0;i--)
                nums.push(arrayNode[i].val)
        }
        flag = !flag
        arrayNode = newArray;
        resultArray.push(nums)
    }
    return resultArray;
};