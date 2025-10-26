/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
intervals = [[1, 4], [2, 3]]
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])  // 前面减后面就是升序了
    let result = []
    result.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= result[result.length - 1][0] && intervals[i][0] <= result[result.length - 1][1]) {
            if (intervals[i][1] > result[result.length - 1][1]) {
                let temp = result.pop();
                temp[1] = intervals[i][1]
                result.push(temp)
            }else
                continue

        } else {
            result.push(intervals[i])
        }
    }
    return result
};
console.log(merge(intervals));
