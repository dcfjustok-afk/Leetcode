/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
    let hashmap =new Set();
    let p = head;
    while (p!==null) {
        if (hashmap.has(p) )
            return true
        else
            hashmap.add(p)
        p = p.next;
    }
    return false;
};