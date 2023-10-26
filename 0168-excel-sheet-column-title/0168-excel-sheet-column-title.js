/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = [];
    
    while(columnNumber > 0) {
        let divide = (columnNumber - 1) % 26;

        let letter = String.fromCharCode(divide + 65);
        result.unshift(letter);

        columnNumber = (columnNumber - divide - 1) / 26;
    }

    return result.join("");
};