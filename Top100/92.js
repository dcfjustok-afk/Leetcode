/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let i = 0;
    let leftNode, rightNode, _leftNode = new ListNode(), _rightNode = new ListNode;
    let newHead = new ListNode(0,head)
    let p=newHead;
 
    let NodeStack=[]
    while (1) {
        if (i ===left - 1) {
            _leftNode = p
        }
        if(i>=left&&i<=right)
            NodeStack.push(p)
        if(i===right+1){
            _rightNode=p;
            let curp=_leftNode;
            while(NodeStack.length){
                curp.next=NodeStack.pop();
                curp=curp.next
            }
            curp.next=_rightNode
            return newHead.next;
        }
        p=p.next;
        i++;
    }
    return newHead.next;
};