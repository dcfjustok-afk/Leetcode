/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let newHead=new ListNode(0,head)
    let p=head;
    let newP=newHead
    let bigArray=[],smallArray=[]
    while(p){
        if(p.val<x){
            newP.next=p;
            newP=newP.next;
        }else{

            bigArray.push(new ListNode(p.val,null))
        }
        p=p.next
    }
    for(let i=0;i<bigArray.length;i++){
        newP.next=bigArray[i]
        newP=newP.next;
    }
    return newHead.next;
};