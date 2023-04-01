const sumAll = function(beginning, end) {
    if (typeof beginning !== "number" || typeof end !== "number") return "ERROR";
    if (beginning < 0 || end < 0) return "ERROR";

    if (beginning > end) {
        let temp = beginning;
        beginning = end;
        end = temp;
    }

    let res = 0;
    for (let i = beginning; i <= end; i++) res += i;
    return res;
};

// Do not edit below this line
module.exports = sumAll;
