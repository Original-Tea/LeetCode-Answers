/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split("");
    let openArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "{" || arr[i] == "(" || arr[i] == "[") {
            openArr.push(arr[i]);
        } else if(arr[i] == "}" || arr[i] == ")" || arr[i] == "]") {
            let popped = openArr.pop();
            if((arr[i] == "}" && popped !== "{") || (arr[i] == "]" && popped !== "[") || ((arr[i] == ")" && popped !== "("))) {
                return false
            }
        }
    }

    if(openArr.length > 0) {
        return false;
    }

    return true;
};