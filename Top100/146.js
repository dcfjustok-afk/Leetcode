/**
 * @param {number} capacity
 */
class Node {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.size=capacity;
    this.dummy=new Node()
    this.head=new Node()
    this.dummy.prev=this.head
    this.head.next=this.dummy
    let hashmap=new Map();
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(hashmap(key)){
        return hashmap();
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(hashmap(key)){
        let curNode=hashmap(key);
        curNode.value=value
        curNode.prev.next=curNode.next;
        curNode.next.pre=curNode.prev;

    }else{

    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */