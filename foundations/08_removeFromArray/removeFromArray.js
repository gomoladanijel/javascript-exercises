const removeFromArray = function(args) {
    args = [...arguments];
    const uniqArr = [...new Set(args[0])];

    for (let i = 1; i < arguments.length; i++) {
        if (uniqArr.includes(arguments[i])) {
            uniqArr.splice(uniqArr.indexOf(arguments[i]), 1);
        }
    }

    return uniqArr;
};

// Do not edit below this line
module.exports = removeFromArray;
