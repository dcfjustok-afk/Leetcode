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
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
function arrayToList(arr) {
    if (!arr || arr.length === 0) return null; // 空数组返回 null

    const dummy = new ListNode(0); // 创建一个虚拟头节点，方便操作
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val); // 创建新节点并连接
        current = current.next;           // 移动指针到新节点
    }

    return dummy.next; // 返回真实头节点
}
// 方法二：链表转数组
function listToArray(head) {
    const result = [];
    let current = head;

    while (current) {
        result.push(current.val); // 将节点值加入数组
        current = current.next;   // 移动到下一个节点
    }

    return result;
}


head=arrayToList([1,2,3,3,4,4,5])
var deleteDuplicates = function (head) {
    // let hashmap = {}
    // let newHead = new ListNode(-111, head);
    // let preNode = newHead;
    // let p = head;
    // while (p) {
    //     if (!hashmap[p])
    //         hashmap[p.val] = { pre: preNode, node: p ,flag:false}
    //     else {//之前出现过
    //     }
    //     pre = p;
    //     p = p.next;
    // }
    let newHead = new ListNode(-111, head);
    let preNode = newHead;
    let p = head;
    while (p) {
        let curVal = p.val;
        let flag = false;
        while (p.next && p.next.val === curVal) {
            p = p.next;
            flag = true;
        }
        if (flag)
            preNode.next = p.next;
        else
            preNode = p;
        p = p.next;
        // console.log(p.val);
        
        // console.log(listToArray(newHead.next));
        
    }
    return newHead.next
};

deleteDuplicates(head)
