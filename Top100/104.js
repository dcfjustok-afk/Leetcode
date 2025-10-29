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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root)
        return 0;
    let arrayNode=[]
    arrayNode.push(root);
    let length=0;
    while(arrayNode.length>0){
        let newArray=[]
        while(arrayNode.length>0){
            let node=arrayNode.pop();
            if(node.left)
                newArray.push(node.left)
            if(node.right)
                newArray.push(node.right)
        }
        length++;
        arrayNode=newArray;
    }
    return length
};