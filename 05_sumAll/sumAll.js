const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    } else {
        let temp;
        let sum = 0;

        if (a > b) {
            temp = b;
            b = a;
            a = temp;
        }

        while (b >= a) {
            sum += b;
            b--;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
