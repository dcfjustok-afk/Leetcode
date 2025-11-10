/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let a = "11", b = "1"
var addBinary = function (a, b) {
    console.log(a,b);
    
    let p1 = a.length - 1, p2 = b.length - 1;
    let more = 0;
    let result = "";
    while (p1 >= 0 && p2 >= 0) {
        let cur = more + Number.parseInt(a[p1]) + Number.parseInt(b[p2])
        more = Math.floor(cur / 2)
        result = cur % 2 + result;
        p1--;
        p2--;
    }
    let left = p1 === 0 ? b.substring(0, p2 + 1) : a.substring(0, p1 + 1)
    // console.log(p1+"  "+p2);
    
    // console.log(left + " " + result + " " + more);
    console.log(left+" "+more);
    
    if (more === 1)
        left = addBinary(left, more.toString());
    return left+result 
};

console.log(addBinary(a,b));
