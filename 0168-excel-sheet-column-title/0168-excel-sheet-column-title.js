/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = "";
    
    while(columnNumber > 0) {
        let divide = (columnNumber - 1) % 26;

        ans = String.fromCharCode(divide + 65) + ans;

        columnNumber = (columnNumber - divide - 1) / 26;
    }

    return ans;
};