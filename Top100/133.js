/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const hashmap = new Map(); // oldNode -> newNode
  const queue = [node];

  // 先克隆起始节点
  hashmap.set(node, new Node(node.val));

  // BFS 遍历
  while (queue.length > 0) {
    const cur = queue.shift();

    for (const neighbor of cur.neighbors) {
      // 若邻居还未被克隆
      if (!hashmap.has(neighbor)) {
        hashmap.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      // 连接当前克隆节点与邻居克隆节点
      hashmap.get(cur).neighbors.push(hashmap.get(neighbor));
    }
  }

  return hashmap.get(node);
};