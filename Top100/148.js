/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head||!head.next) // 0个节点或者1个节点
        return head
    let slow=head,fast=head,prev=null
    while(fast&&fast.next){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    prev.next=null
    let left=sortList(head)
    let right=sortList(slow)
    // 3️⃣ 合并两个有序链表
    return merge(left, right);
};
// 合并两个有序链表
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    cur.next = l1 ? l1 : l2;
    return dummy.next;
}