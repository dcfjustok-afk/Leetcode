/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
let L1=new ListNode(2)
L1.next=new ListNode(4,new ListNode(3))

let L2=new ListNode(5)
L2.next=new ListNode(6,new ListNode(4))

var addTwoNumbers = function(l1, l2) {
    let len1=0,len2=0;
    let p1=l1,p2=l2;
    while(p1){
        len1++;
        p1=p1.next;
    }
    while(p2){
        len2++;
        p2=p2.next;
    }
    // console.log(l1);
    // console.log(l2);
    
    
    if(len1>len2){
        p1=l1;
        p2=l2
    }else{
        p1=l2;
        p2=l1;
    }
    let isMore=0;
    let result=[]
    // console.log(p1);
    // console.log(p2);
    
    
    while(p2){
        // if(p1.val+p2.val+isMore>10){
        //     p1.val=(p1.val+p2.val+isMore)%10
        //     isMore=1
        // }else{
        //     p1.val=(p1.val+p2.val)%10
        //     isMore=0
        // }
        result.push((p1.val+p2.val+isMore)%10)
        isMore=(p1.val+p2.val+isMore>=10)?1:0
        p1=p1.next;
        p2=p2.next;

    }
    while(p1){
        result.push((p1.val+isMore)%10)
        isMore=(p1.val+isMore>=10)?1:0
    }
    if(isMore)
        result.push(1)
    return result
    
};

console.log(addTwoNumbers(L1,L2));


// 我这里思路没错 ，就是要将 返回值的 类型从 数组改为 链表