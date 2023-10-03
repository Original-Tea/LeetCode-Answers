/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let splitted = s.split("");
    
    for(let i = 0; i < splitted.length; i++) {
        if((splitted[i] == 'C' && splitted[i + 1] == 'M') || (splitted[i] == 'C' && splitted[i + 1] == 'D')) {
            result -= 100;
        } else if(splitted[i] == 'M') {
            result += 1000;
        } else if(splitted[i] == 'D') {
            result += 500;
        } else if(splitted[i] == 'C') {
            result += 100
        } else if((splitted[i] == 'X' && splitted[i + 1] == 'C') || (splitted[i] == 'X' && splitted[i + 1] == 'L')) {
            result -= 10;
        } else if(splitted[i] == 'L') {
            result += 50;
        } else if(splitted[i] == 'X') {
            result += 10;
        } else if((splitted[i] == 'I' && splitted[i + 1] == 'X') || (splitted[i] == 'I' && splitted[i + 1] == 'V')) {
            result--;
        } else if(splitted[i] == 'V') {
            result += 5;
        } else if(splitted[i] == 'I') {
            result++;
        }
    }


    return result;
};