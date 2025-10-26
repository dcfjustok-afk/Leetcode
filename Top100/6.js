s = "PAYPALISHIRING", numRows = 3
var convert = function(s, numRows) {
    let resultString=[]
    for(let i=0;i<numRows;i++)
        resultString[i]=""
    let index=0
    while(index<s.length){
        //先向下
        for(let j=0;j<numRows&&index<s.length;j++){
            resultString[j]+=s[index++]
        }
        //再向上
        for(let j=numRows-2;j>0&&index<s.length;j--){
            resultString[j]+=s[index++]
        }
        // console.log(resultString);
        
    }
    //把结果得出来
    let result=""
    for(let i=0;i<numRows;i++)
        result+=resultString[i]
    return result
};
console.log(convert(s, numRows));
