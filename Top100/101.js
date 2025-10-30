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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * 将数组转换为二叉树
 * @param {Array} arr 层序遍历数组（可以包含 null）
 * @returns {TreeNode} 根节点
 */
function arrayToTree(arr) {
    if (!arr || arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        // 处理左子节点
        if (i < arr.length && arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        // 处理右子节点
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}
root = [1,2,2,null,3,null,3]
var isSymmetric = function (root) {
    if (!root)
        return true;
    if(!root.left&&!root.right)
        return true
    let leftArray = [], rightArray = [];
    leftArray.push(root.left)
    rightArray.push(root.right)
    while (leftArray.length > 0 && rightArray.length > 0 && leftArray.length === rightArray.length) {
        let curLeft = leftArray.pop();
        let curRight = rightArray.pop();
        if (curLeft && curRight && curLeft.val === curRight.val) {
            if (curLeft.left && curRight.right) {
                leftArray.push(curLeft.left)
                rightArray.push(curRight.right)
            }else if(!curLeft.left && !curRight.right){

            }else{
                return false
            }
            if (curLeft.right && curRight.left) {
                leftArray.push(curLeft.right)
                rightArray.push(curRight.left)
            }else if(!curLeft.right && !curRight.left){

            }else{
                return false
            }
            continue
        }
        return false
    }
    // console.log(leftArray);
    // console.log(rightArray);


    if (leftArray.length === 0 && rightArray.length === 0)
        return true;
    return false;
};
console.log(isSymmetric(arrayToTree(root)));
