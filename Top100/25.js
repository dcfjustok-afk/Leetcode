var reverseKGroup = function (head, k) {
    let length = 0;
    let p = head;
    while (p) {
        p = p.next;
        length++;
    }
    let newHead = new ListNode(0, head)
    p = head
    let preNode = newHead
    for (let i = 0; i < length; i++) {
        if (length - i - 1 < k) break;
        preNode = reverseBetween(p, i + 1, i + k + 1);
        for (let j = 0; j < k; j++) {
            preNode = p;
            p = p.next;
            i++;
        }

    }
};
var reverseBetween = function (head, left, right) {
    let i = 0;
    let leftNode, rightNode, _leftNode = new ListNode(), _rightNode = new ListNode;
    let newHead = new ListNode(0, head)
    let p = newHead;

    let NodeStack = []
    while (1) {
        if (i === left - 1) {
            _leftNode = p
        }
        if (i >= left && i <= right)
            NodeStack.push(p)
        if (i === right + 1) {
            _rightNode = p;
            let curp = _leftNode;
            while (NodeStack.length) {
                curp.next = NodeStack.pop();
                curp = curp.next
            }
            curp.next = _rightNode
            return newHead.next;
        }
        p = p.next;
        i++;
    }
    return newHead.next;
};