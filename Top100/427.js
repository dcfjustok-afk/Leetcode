/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
    let func = (x, y, length) => {
        if (length === 1)
            return new _Node(grid[x][y], 1, null, null, null, null)
        let val = grid[x][y];
        let flag = true;
        for (let i = x; i < x + length; i++) {
            if (flag) {
                for (let j = y; j < y + length; j++) {
                    if (grid[i][j] !== val) {
                        flag = false;
                        break;
                    }
                }
            }
        }
        if(flag){ //全是一样的 ， 叶子节点
            return new _Node(val,1,null, null, null, null)
        }else{
            let topLeft=func(x,y,length/2)
            let topRight=func(x,y+length/2,length/2)
            let bottomLeft=func(x+length/2,y,length/2)
            let bottomRight=func(x+length/2,y+length/2,length/2)
            return new _Node(0,0,topLeft,topRight,bottomLeft,bottomRight)
        }
    }
    let root = func(0, 0, grid.length)
    return root
};