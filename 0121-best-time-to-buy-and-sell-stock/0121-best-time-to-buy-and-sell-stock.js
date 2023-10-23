/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = null;
    let diff = 0;

    for(let i = 0; i < prices.length; i++) {
        if(min == null || prices[i] < min) {
            min = prices[i];
            continue;
        }

        if(prices[i] - min > diff) {
            diff = prices[i] - min;
        }
    }

    return diff;
};