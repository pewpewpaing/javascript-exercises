const removeFromArray = function(arr, ...valuesToRemove) {
    const newArray = [];
    arr.forEach(item => {
        if (!valuesToRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

/*
    const removeFromArray = function(array, ...args) {
        return array.filter(val => !args.includes(val));
    }
*/

// Do not edit below this line
module.exports = removeFromArray;
