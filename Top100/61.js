/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

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




head=[1,2,3,4,5] , k=2
var rotateRight = function(head, k) {
    // console.log(listToArray(head));
    if(!head)
        return null
    let newHead=new ListNode(0,head);
    let p=head;
    let length=0;
    while(p.next){
        p=p.next;
        length++;
    }
    length++;
    if(k%length===0)
        return head;
    let endNode=p;
    k=k%length;
    p=head;
    // console.log(length);


    for(let i=0;i<length-k-1;i++){
        p=p.next;
    }
    // console.log(p);
    
    newHead.next=p.next;
    p.next=null
    endNode.next=head;
    // console.log((listToArray(newHead)));
    
    return newHead.next;
};


rotateRight(arrayToList(head),k)