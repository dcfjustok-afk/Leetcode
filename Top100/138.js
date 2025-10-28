/**
 * // Definition for a Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

var copyRandomList = function(head) {
    if (!head) return null;

    // 哈希表：旧节点 -> 新节点
    const hashmap = new Map();  // 要多用 哈希映射 

    // 第一遍：复制所有节点（只复制 val，不连线）
    let curr = head;
    while (curr) {
        hashmap.set(curr, new _Node(curr.val, null, null));
        curr = curr.next;
    }

    // 第二遍：补上 next 和 random 的指针
    curr = head;
    while (curr) {
        hashmap.get(curr).next = hashmap.get(curr.next) || null;
        hashmap.get(curr).random = hashmap.get(curr.random) || null;
        curr = curr.next;
    }

    // 返回新链表的头节点
    return hashmap.get(head);
};




