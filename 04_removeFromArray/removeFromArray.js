const removeFromArray = function(arr) {
    const ARGS = arguments;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < ARGS.length; j++) {
            if (arr[i] === ARGS[j]) {
                arr.splice(i, 1);
                j = 0;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
