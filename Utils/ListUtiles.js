// 方法一：数组转链表
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
