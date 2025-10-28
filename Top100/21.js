/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let list1=new ListNode(1,new ListNode(2,new ListNode(4)))
let list2=new ListNode(1,new ListNode(3,new ListNode(4)))
var mergeTwoLists = function (list1, list2) {
    
    let head = new ListNode();
    let p = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            p.next = list1
            list1 = list1.next;
            p=p.next;
        } else {
            p.next = list2;
            list2 = list2.next;
            p=p.next
        }
    }
    // console.log(head);
    
    if (!list1 && !list2) {//正好都走到底

    } else if (!list1 && list2) { // list1走到底了
        p.next = list2;
    } else {
        p.next = list1
    }
    // console.log(head);
    
    return head.next;
};

console.log(mergeTwoLists(list1,list2));
