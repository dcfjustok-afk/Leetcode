/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if(!root)
        return root
    let arrayNode = []
    arrayNode.push(root)
    while (arrayNode.length > 0) {
        let newNode = []
        for (let i = 0; i < arrayNode.length; i++) {
            if (i !== arrayNode.length - 1) {
                arrayNode[i].next = arrayNode[i + 1]
            } 
            if (arrayNode[i].left) newNode.push(arrayNode[i].left)
            if (arrayNode[i].right) newNode.push(arrayNode[i].right)
        }
        arrayNode=newNode
    }
    return root;
};