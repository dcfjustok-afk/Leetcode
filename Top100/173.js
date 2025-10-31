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
 */
var BSTIterator = function (root) {
    let minNode = root;
    while (minNode.left) {
        minNode = minNode.left;
    }
    this.nums = []
    function func(root) {
        if (!root.left) {

        } else {
            func(root.left)
        }
        this.nums.push(root.val)
        if (root.right)
            func(root.right)
    }
    func(root)
    this.index = 0;;
    this.newNode = new TreeNode(minNode.val - 1);
    minNode.left
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.nums[index++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    if(this.index<this.nums.length)
        return true
    return false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */