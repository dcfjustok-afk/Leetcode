/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let newHead = new ListNode(0, head);
    let p = newHead, length = 0;
    let NodeStack = []
    while (p) {
        NodeStack.push(p)
        p = p.next;
        length++;
    }
    for (let i = 1; i < n + 1; i++) {
        if (i === n) {
            let cur=NodeStack.pop();
            let left = NodeStack.pop();
            left.next=cur.next;
            return newHead.next
        }
        p = NodeStack.pop()
    }

};