/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if(!p&&!q)
        return true
    let arrP = [], arrQ = [];
    arrP.push(p)
    arrQ.push(q)
    while (arrP.length > 0 && arrQ.length > 0 && arrP.length === arrQ.length) {
        let new_arrP = [], new_arrQ = []
        for (let i = 0; i < arrP.length; i++) {
            if (arrP[i] && arrQ[i]) {
                if (arrP[i].val === arrQ[i].val) {
                    if (arrP[i].left === null && arrQ[i].left === null) {

                    } else if (arrP[i].left !== null && arrQ[i].left !== null) {
                        new_arrP.push(arrP[i].left)
                        new_arrQ.push(arrQ[i].left)
                    } else {
                        return false;
                    }

                    if (arrP[i].right === null && arrQ[i].right === null) {

                    } else if (arrP[i].right !== null && arrQ[i].right !== null) {
                        new_arrP.push(arrP[i].right)
                        new_arrQ.push(arrQ[i].right)
                    } else {
                        return false;
                    }
                } else
                    return false
            } else
                return false
        }
        arrP = new_arrP
        arrQ = new_arrQ
    }
    if (arrP.length === 0 && arrQ.length === 0)
        return true
    return false;
};