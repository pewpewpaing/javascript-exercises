const fibonacci = function(count) {
    if (typeof count !== "number" || count <= 0 || Number.isNaN(count)) {
        return "OOPS";
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
    // count = 1: fib = 1
    // count = 2: firstPrev = 1; secondPrev = 0; -> current = 1 + 0 = 1; secondPrev = 1; firstPrev = 1 <<=
    // count = 3: firstPrev = 1; secondPrev = 1; -> current = 1 + 1 = 2; secondPrev = 1; firstPrev = 2 <<=
    // count = 4: firstPrev = 2; secondPrev = 1; -> current = 1 + 2 = 3; secondPrev = 2; firstPrev = 3 <<=
};

// Do not edit below this line
module.exports = fibonacci;
