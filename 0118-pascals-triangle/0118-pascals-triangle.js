/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result =[[1]];
    let count = 1;

    let recursive = function(arr, num) {
        let newArr = [];
        if(num == numRows) {
            return;
        }
        num = num + 1
        for(let i = 0; i < num; i++) {
            if(i == 0 || i == num - 1) {
                newArr.push(1);
            } else {
                newArr.push(arr[num - 2][i - 1] + arr[num - 2][i]);
            }
        }
        result.push(newArr)
        return recursive(result, num)
    }

    recursive(result, count)

    return result;
};