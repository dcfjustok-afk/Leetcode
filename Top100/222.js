var countNodes = function(root) {
    if(!root)
        return 0;
    let count=0;
    let arrayNode=[]
    arrayNode.push(root)
    while(arrayNode.length>0){
        count++;
        let curNode=arrayNode.pop()
        if(curNode.left)
            arrayNode.push(curNode.left)
        if(curNode.right)
            arrayNode.push(curNode.right)
    }
    return count
};